/*
  Warnings:

  - Made the column `image` on table `Pizza` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Pizza` ADD COLUMN `glutenFree` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `vegan` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `image` TEXT NOT NULL;
