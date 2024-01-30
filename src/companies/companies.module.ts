import { Module } from "@nestjs/common"
import { CompaniesController } from "./companies.controller"
import { CompaniesService } from "./companies.service"
import { PrismaModule } from "../prisma/prisma.module"

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [PrismaModule]
})
export class CompaniesModule {}
