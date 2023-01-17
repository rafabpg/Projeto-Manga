/*
  Warnings:

  - The `status` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Ongoing', 'Finished');

-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Ongoing';
