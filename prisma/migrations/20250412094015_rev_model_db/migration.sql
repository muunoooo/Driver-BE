/*
  Warnings:

  - The values [cash,debit] on the enum `PaymentMethod` will be removed. If these variants are still used in the database, this will fail.
  - The values [admin,cashier] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `endTime` on the `Shift` table. All the data in the column will be lost.
  - You are about to drop the column `endingCash` on the `Shift` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Shift` table. All the data in the column will be lost.
  - You are about to drop the column `startingCash` on the `Shift` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startCash` to the `Shift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Shift` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FOOD', 'DRINK');

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('CASH', 'DEBIT');
ALTER TABLE "Transaction" ALTER COLUMN "paymentMethod" TYPE "PaymentMethod_new" USING ("paymentMethod"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "PaymentMethod_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'CASHIER');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "Shift" DROP COLUMN "endTime",
DROP COLUMN "endingCash",
DROP COLUMN "startTime",
DROP COLUMN "startingCash",
ADD COLUMN     "endCash" INTEGER,
ADD COLUMN     "endedAt" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "startCash" INTEGER NOT NULL,
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "totalCash" INTEGER,
ADD COLUMN     "totalDebit" INTEGER,
ADD COLUMN     "totalTransaction" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
