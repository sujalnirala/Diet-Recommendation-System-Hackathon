/*
  Warnings:

  - Made the column `vitamins` on table `food` required. This step will fail if there are existing NULL values in that column.
  - Made the column `minerals` on table `food` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `food` MODIFY `vitamins` VARCHAR(191) NOT NULL,
    MODIFY `minerals` VARCHAR(191) NOT NULL;
