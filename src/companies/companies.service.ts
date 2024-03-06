import { Injectable } from "@nestjs/common"
import { Company } from "./entities/company.entity"
import { PrismaService } from "../prisma/prisma.service"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.prisma.company.create({ data: createCompanyDto })
  }

  async findAll(citySlug: string): Promise<Company[]> {
    return this.prisma.company.findMany({ where: { citySlug } })
  }

  async findOne(id: string): Promise<Company> {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        products: { include: { images: true } },
        images: true
      }
    })
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company> {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto
    })
  }

  async remove(id: string): Promise<Company> {
    return this.prisma.company.delete({ where: { id } })
  }
}
