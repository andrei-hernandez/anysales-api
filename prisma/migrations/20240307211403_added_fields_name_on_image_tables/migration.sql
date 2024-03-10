/*
  Warnings:

  - Added the required column `name` to the `avatar_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `company_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `product_images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "company_images" DROP CONSTRAINT "company_images_companyId_fkey";

-- AlterTable
ALTER TABLE "avatar_images" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "company_images" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product_images" ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "company_images" ADD CONSTRAINT "company_images_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
