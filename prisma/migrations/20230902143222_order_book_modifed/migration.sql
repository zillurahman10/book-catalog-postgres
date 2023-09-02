/*
  Warnings:

  - You are about to drop the column `orderedBook` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderedBook",
ADD COLUMN     "orderedBooks" JSONB[];
