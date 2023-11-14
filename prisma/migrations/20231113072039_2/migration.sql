/*
  Warnings:

  - You are about to drop the column `category` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,0)`.
  - You are about to drop the column `role` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `cashier_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `total_quantity` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `categories_products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaction_items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryName` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleName` to the `Roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentAmount` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentChange` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_methodId` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuantity` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `categories_products` DROP FOREIGN KEY `categories_products_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `categories_products` DROP FOREIGN KEY `categories_products_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `transaction_items` DROP FOREIGN KEY `transaction_items_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `transaction_items` DROP FOREIGN KEY `transaction_items_transaction_id_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_cashier_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `category`,
    ADD COLUMN `categoryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `created_at`,
    DROP COLUMN `name`,
    DROP COLUMN `quantity`,
    DROP COLUMN `status`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD COLUMN `statusId` INTEGER NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `price` DECIMAL(10, 0) NOT NULL,
    MODIFY `image` VARCHAR(1000) NOT NULL,
    MODIFY `description` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `role`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `cashier_id`,
    DROP COLUMN `total_price`,
    DROP COLUMN `total_quantity`,
    ADD COLUMN `paymentAmount` DECIMAL(10, 0) NOT NULL,
    ADD COLUMN `paymentChange` DECIMAL(10, 0) NOT NULL,
    ADD COLUMN `payment_methodId` INTEGER NOT NULL,
    ADD COLUMN `totalPrice` DECIMAL(10, 0) NOT NULL,
    ADD COLUMN `totalQuantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `address` VARCHAR(1000) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `avatar` VARCHAR(1000) NOT NULL;

-- DropTable
DROP TABLE `categories_products`;

-- DropTable
DROP TABLE `transaction_items`;

-- CreateTable
CREATE TABLE `Status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `statusName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction_Details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `transactionId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DECIMAL(10, 0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment_Method` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paymentName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_payment_methodId_fkey` FOREIGN KEY (`payment_methodId`) REFERENCES `Payment_Method`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction_Details` ADD CONSTRAINT `Transaction_Details_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction_Details` ADD CONSTRAINT `Transaction_Details_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
