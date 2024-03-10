/*
  Warnings:

  - You are about to drop the column `name` on the `avatar_images` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `company_images` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product_images` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_images" DROP CONSTRAINT "company_images_companyId_fkey";

-- AlterTable
ALTER TABLE "avatar_images" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "company_images" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "product_images" DROP COLUMN "name";

-- AddForeignKey
ALTER TABLE "company_images" ADD CONSTRAINT "company_images_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
