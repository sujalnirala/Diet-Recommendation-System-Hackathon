/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `profile` table. All the data in the column will be lost.
  - Made the column `age` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `firstName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `updatedAt`,
    MODIFY `age` INTEGER NOT NULL,
    MODIFY `gender` VARCHAR(191) NOT NULL,
    MODIFY `weight` DOUBLE NOT NULL,
    MODIFY `height` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;
