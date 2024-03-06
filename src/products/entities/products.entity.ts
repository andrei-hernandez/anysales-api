import { Product as ProductEntity } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"
import { ProductCategory } from "../../types"

export class Product implements ProductEntity {
  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  price: number

  @ApiProperty()
  sku: string

  @ApiProperty()
  category: ProductCategory

  @ApiProperty()
  isBestSeller: boolean

  @ApiProperty()
  stock: number

  @ApiProperty()
  companyId: string

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
