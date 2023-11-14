/*
  Warnings:

  - You are about to drop the column `role` on the `roles` table. All the data in the column will be lost.
  - Added the required column `roleName` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `roles` DROP COLUMN `role`,
    ADD COLUMN `roleName` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `address` VARCHAR(1000) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `avatar` VARCHAR(1000) NOT NULL;
