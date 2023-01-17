/*
  Warnings:

  - A unique constraint covering the columns `[capa]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `capa` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "capa" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "imagem" TEXT NOT NULL,
    "mangaID" INTEGER NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_imagem_key" ON "Chapter"("imagem");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_capa_key" ON "Manga"("capa");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_mangaID_fkey" FOREIGN KEY ("mangaID") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
