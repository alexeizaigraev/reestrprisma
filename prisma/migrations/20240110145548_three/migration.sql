/*
  Warnings:

  - You are about to drop the column `number` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "number",
ADD COLUMN     "nnumber" INTEGER DEFAULT 0;
