/*
  Warnings:

  - A unique constraint covering the columns `[citySlug]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `citySlug` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "CompanyCategory" ADD VALUE 'SERVICE';

-- AlterEnum
ALTER TYPE "ProductCategory" ADD VALUE 'SERVICE';

-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "citySlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "companies_citySlug_key" ON "companies"("citySlug");
