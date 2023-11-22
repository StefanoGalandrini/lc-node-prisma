/*
  Warnings:

  - You are about to drop the column `glutenFree` on the `Pizza` table. All the data in the column will be lost.
  - You are about to drop the column `vegan` on the `Pizza` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pizza` DROP COLUMN `glutenFree`,
    DROP COLUMN `vegan`,
    MODIFY `image` TEXT NULL;
