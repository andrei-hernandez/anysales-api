/*
  Warnings:

  - You are about to drop the column `landingContent` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `landingLayout` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "landingContent",
DROP COLUMN "landingLayout";
