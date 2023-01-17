/*
  Warnings:

  - You are about to drop the column `capa` on the `Manga` table. All the data in the column will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[capaURL]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `capaURL` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_mangaID_fkey";

-- DropIndex
DROP INDEX "Manga_capa_key";

-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "capa",
ADD COLUMN     "capaURL" TEXT NOT NULL,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "author" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Chapter";

-- CreateIndex
CREATE UNIQUE INDEX "Manga_capaURL_key" ON "Manga"("capaURL");
