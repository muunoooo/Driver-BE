import prisma from "../prisma";

export const findCust = async (email: string) => {
  const userCust = await prisma.user.findFirst({
    where: { email: email },
  });
  return userCust;
};
