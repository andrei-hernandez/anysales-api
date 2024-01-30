import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({ data: createCompanyDto })
  }

  findAll(citySlug: string) {
    return this.prisma.company.findMany({ where: { citySlug } })
  }

  findOne(id: string) {
    console.info(id, "executing find one service")
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        products: { include: { images: true } },
        images: true
      }
    })
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({ where: { id }, data: updateCompanyDto })
  }

  remove(id: string) {
    return this.prisma.company.delete({ where: { id } })
  }

  findAllProductsOfCompany(id: string) {
    return this.prisma.company.findUnique({ where: { id } })
  }
}

/*
findAllProductsOfStore(id: number) {
  return this.prisma.store.findFirst({
    where: { id },
    include: {
      products: {
        include: {
          categories: {
            select: { category: { select: { name: true } } }
          }
        }
      }
    }
  })
}
*/
