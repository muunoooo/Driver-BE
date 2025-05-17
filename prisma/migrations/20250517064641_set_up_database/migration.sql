-- CreateEnum
CREATE TYPE "CostStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PAID');

-- CreateEnum
CREATE TYPE "ShipmentStatus" AS ENUM ('RUNNING', 'DONE', 'CANCELED');

-- CreateTable
CREATE TABLE "Drivers" (
    "id" TEXT NOT NULL,
    "driver_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drivers_Attendances" (
    "id" TEXT NOT NULL,
    "driver_code" TEXT NOT NULL,
    "attendance_date" TIMESTAMP(3) NOT NULL,
    "attendance_status" BOOLEAN NOT NULL,

    CONSTRAINT "Drivers_Attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment_Costs" (
    "id" TEXT NOT NULL,
    "driver_code" TEXT NOT NULL,
    "shipment_no" TEXT NOT NULL,
    "total_costs" INTEGER NOT NULL,
    "cost_status" "CostStatus" NOT NULL,

    CONSTRAINT "Shipment_Costs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "shipment_no" TEXT NOT NULL,
    "shipment_date" TIMESTAMP(3) NOT NULL,
    "shipment_status" "ShipmentStatus" NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("shipment_no")
);

-- CreateTable
CREATE TABLE "Variable_Config" (
    "key" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Variable_Config_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drivers_driver_code_key" ON "Drivers"("driver_code");

-- AddForeignKey
ALTER TABLE "Drivers_Attendances" ADD CONSTRAINT "Drivers_Attendances_driver_code_fkey" FOREIGN KEY ("driver_code") REFERENCES "Drivers"("driver_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment_Costs" ADD CONSTRAINT "Shipment_Costs_driver_code_fkey" FOREIGN KEY ("driver_code") REFERENCES "Drivers"("driver_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment_Costs" ADD CONSTRAINT "Shipment_Costs_shipment_no_fkey" FOREIGN KEY ("shipment_no") REFERENCES "Shipment"("shipment_no") ON DELETE RESTRICT ON UPDATE CASCADE;
