-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "volume" INTEGER NOT NULL,
    "description" TEXT,
    "images" TEXT[],
    "capa_url" TEXT NOT NULL,
    "mangaId" INTEGER NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_volume_key" ON "Chapter"("volume");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_images_key" ON "Chapter"("images");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_capa_url_key" ON "Chapter"("capa_url");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
