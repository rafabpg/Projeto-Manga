/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `CategoriesOnManga` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `CategoriesOnManga` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CategoriesOnManga" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";

-- CreateIndex
CREATE UNIQUE INDEX "Manga_title_key" ON "Manga"("title");
