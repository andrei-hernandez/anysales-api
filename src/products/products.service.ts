import { Injectable } from "@nestjs/common"
import { Product } from "./entities/products.entity"
import { PrismaService } from "../prisma/prisma.service"
import { UpdateProductDto } from "./dto/update-product.dto"
import { CreateProductDto } from "./dto/ create-product.dto"

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        images: {
          create: createProductDto.images
        }
      },
      include: { images: true }
    })
  }

  async findAllProductsOfCompany(companyId: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: { companyId: companyId },
      include: { images: true }
    })
  }

  async findOne(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
      include: { images: true }
    })
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        images: {
          create: updateProductDto.images
        }
      },
      include: { images: true }
    })
  }

  async remove(id: string): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
      include: { images: true }
    })
  }
}
