/*
  Warnings:

  - A unique constraint covering the columns `[cloudinary_id]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "cloudinary_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_cloudinary_id_key" ON "Chapter"("cloudinary_id");
