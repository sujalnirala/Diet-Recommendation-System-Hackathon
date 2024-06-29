/*
  Warnings:

  - A unique constraint covering the columns `[mealId]` on the table `Food` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Food_mealId_key` ON `Food`(`mealId`);
