/*
  Warnings:

  - You are about to drop the column `mealPlanId` on the `meal` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.
  - You are about to alter the column `allergies` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.
  - You are about to alter the column `dietaryPreferences` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `VarChar(191)`.
  - You are about to alter the column `healthGoals` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `VarChar(191)`.
  - You are about to drop the `mealfood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mealplan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mealId` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `meal` DROP FOREIGN KEY `Meal_mealPlanId_fkey`;

-- DropForeignKey
ALTER TABLE `mealfood` DROP FOREIGN KEY `MealFood_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `mealfood` DROP FOREIGN KEY `MealFood_mealId_fkey`;

-- DropForeignKey
ALTER TABLE `mealplan` DROP FOREIGN KEY `MealPlan_userId_fkey`;

-- AlterTable
ALTER TABLE `food` ADD COLUMN `mealId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `meal` DROP COLUMN `mealPlanId`;

-- AlterTable
ALTER TABLE `user` MODIFY `role` VARCHAR(191) NOT NULL,
    MODIFY `allergies` VARCHAR(191) NULL,
    MODIFY `dietaryPreferences` VARCHAR(191) NULL,
    MODIFY `healthGoals` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `mealfood`;

-- DropTable
DROP TABLE `mealplan`;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_mealId_fkey` FOREIGN KEY (`mealId`) REFERENCES `Meal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
