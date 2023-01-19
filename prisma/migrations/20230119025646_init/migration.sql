/*
  Warnings:

  - A unique constraint covering the columns `[cloudinary_id]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "cloudinary_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Manga_cloudinary_id_key" ON "Manga"("cloudinary_id");
