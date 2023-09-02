/*
  Warnings:

  - You are about to drop the column `orderedBooks` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderedBooks",
ADD COLUMN     "orderedBook" JSONB[];
