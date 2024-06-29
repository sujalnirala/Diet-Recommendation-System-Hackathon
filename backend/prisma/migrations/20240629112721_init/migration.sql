/*
  Warnings:

  - You are about to drop the column `date` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `meal` DROP COLUMN `date`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`;
