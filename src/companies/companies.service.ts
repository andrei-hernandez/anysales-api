import { Injectable } from "@nestjs/common"
import { Company } from "./entities/company.entity"
import { PrismaService } from "../prisma/prisma.service"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.prisma.company.create({
      data: {
        ...createCompanyDto,
        owners: {
          connect: createCompanyDto.owners
        },
        images: {
          create: createCompanyDto.images
        }
      },
      include: {
        products: { include: { images: true } },
        owners: { include: { avatar: true } },
        images: true
      }
    })
  }

  async findAll(citySlug: string): Promise<Company[]> {
    return this.prisma.company.findMany({
      where: { citySlug },
      include: {
        products: { include: { images: true } },
        owners: { include: { avatar: true } },
        images: true
      }
    })
  }

  async findOne(id: string): Promise<Company> {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        products: { include: { images: true } },
        owners: { include: { avatar: true } },
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
      data: {
        ...updateCompanyDto,
        owners: {
          connect: updateCompanyDto.owners
        },
        images: {
          create: updateCompanyDto.images
        }
      },
      include: {
        products: { include: { images: true } },
        owners: { include: { avatar: true } },
        images: true
      }
    })
  }

  async remove(id: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { id },
      include: {
        products: { include: { images: true } },
        owners: { include: { avatar: true } },
        images: true
      }
    })
  }
}
