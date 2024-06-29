/*
  Warnings:

  - You are about to drop the column `createdAt` on the `food` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `food` table. All the data in the column will be lost.
  - You are about to alter the column `allergies` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.
  - You are about to alter the column `dietaryPreferences` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `healthGoals` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(4))`.
  - Added the required column `forWeightGain` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forWeightLoss` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveGluten` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `havePeanuts` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveSesame` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNonVeg` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isVeg` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `forWeightGain` BOOLEAN NOT NULL,
    ADD COLUMN `forWeightLoss` BOOLEAN NOT NULL,
    ADD COLUMN `haveGluten` BOOLEAN NOT NULL,
    ADD COLUMN `havePeanuts` BOOLEAN NOT NULL,
    ADD COLUMN `haveSesame` BOOLEAN NOT NULL,
    ADD COLUMN `isNonVeg` BOOLEAN NOT NULL,
    ADD COLUMN `isVeg` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `allergies` ENUM('PEANUTS', 'SESAME', 'GLUTEN') NULL,
    MODIFY `dietaryPreferences` ENUM('Vegetarian', 'NonVegetarian') NULL,
    MODIFY `healthGoals` ENUM('WEIGHT_LOSS', 'WEIGHT_GAIN') NULL;
