import prisma from "../prisma";

export const salaryService = async (query: any) => {
  const pageSize = Number(query.page_size) || 10;
  const current = Number(query.current) || 1;
  const driver_code = query.driver_code || undefined;
  const name = query.name || undefined;
  const status = query.status || undefined;
  const month = Number(query.month);
  const year = Number(query.year);

  if (!month || !year) throw new Error("Month and Year are required");

  const startDate = new Date(`${year}-${String(month).padStart(2, "0")}-01`);
  const endDate =
    month === 12
      ? new Date(`${year + 1}-01-01`)
      : new Date(`${year}-${String(month + 1).padStart(2, "0")}-01`);

  const attendanceSalary = await prisma.variable_Config.findUnique({
    where: { key: "DRIVER_MONTHLY_ATTENDANCE_SALARY" },
  });

  const attendanceSalaryValue = attendanceSalary?.value || 0;

  const drivers = await prisma.drivers.findMany({
    where: {
      ...(driver_code && { driver_code }),
      ...(name && { name: { contains: name, mode: "insensitive" } }),
    },
    include: {
      attendances: {
        where: {
          attendance_status: true,
          attendance_date: {
            gte: startDate,
            lt: endDate,
          },
        },
      },
      shipmentCosts: {
        where: {
          shipment: {
            shipment_date: {
              gte: startDate,
              lt: endDate,
            },
            shipment_status: {
              not: "CANCELED",
            },
          },
        },
        include: { shipment: true },
      },
    },
  });

  const filteredDrivers = drivers
    .map((driver) => {
      const total_attendance_salary =
        driver.attendances.length * attendanceSalaryValue;

      const shipmentCosts = driver.shipmentCosts;

      const total_pending = shipmentCosts
        .filter((s) => s.cost_status === "PENDING")
        .reduce((sum, s) => sum + s.total_costs, 0);

      const total_confirmed = shipmentCosts
        .filter((s) => s.cost_status === "CONFIRMED")
        .reduce((sum, s) => sum + s.total_costs, 0);

      const total_paid = shipmentCosts
        .filter((s) => s.cost_status === "PAID")
        .reduce((sum, s) => sum + s.total_costs, 0);

      const count_shipment = new Set(shipmentCosts.map((s) => s.shipment_no))
        .size;

      const total_salary =
        total_attendance_salary + total_pending + total_confirmed + total_paid;

      return {
        driver_code: driver.driver_code,
        name: driver.name,
        total_pending,
        total_confirmed,
        total_paid,
        total_attendance_salary,
        total_salary,
        count_shipment,
      };
    })
    .filter((driver) => {
      if (status === "PENDING") return driver.total_pending > 0;
      if (status === "CONFIRMED") return driver.total_confirmed > 0;
      if (status === "PAID")
        return (
          driver.total_paid > 0 &&
          driver.total_confirmed === 0 &&
          driver.total_pending === 0
        );
      return driver.total_salary > 0;
    });

  const total_row = filteredDrivers.length;
  const total_pages = Math.ceil(total_row / pageSize);
  const paginated = filteredDrivers.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  return {
    data: paginated,
    pagination: {
      total_row,
      page_size: pageSize,
      current_page: current,
      total_pages,
      has_next_page: current < total_pages,
      has_prev_page: current > 1,
    },
  };
};
