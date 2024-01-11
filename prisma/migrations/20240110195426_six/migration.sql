/*
  Warnings:

  - You are about to drop the column `avatarUrl` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "avatarUrl",
DROP COLUMN "createdAt",
DROP COLUMN "updateAt",
ADD COLUMN     "avatarurl" TEXT DEFAULT 'Введите значение',
ADD COLUMN     "createdat" DATE DEFAULT LOCALTIMESTAMP,
ADD COLUMN     "updateat" DATE;
