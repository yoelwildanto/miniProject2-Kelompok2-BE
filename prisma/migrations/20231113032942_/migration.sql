/*
  Warnings:

  - Made the column `category` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categories` MODIFY `category` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `image` VARCHAR(255) NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `status` VARCHAR(255) NOT NULL;
