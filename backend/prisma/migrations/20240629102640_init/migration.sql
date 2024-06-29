/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `allergies` VARCHAR(191) NULL,
    ADD COLUMN `dietaryPreferences` VARCHAR(191) NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `healthGoals` VARCHAR(191) NULL,
    ADD COLUMN `height` DOUBLE NULL,
    ADD COLUMN `weight` DOUBLE NULL;

-- DropTable
DROP TABLE `profile`;
