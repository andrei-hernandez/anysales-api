import { ProductImage as ProductImagesEntity } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"

export class ProductImage implements ProductImagesEntity {
  constructor(partial: Partial<ProductImagesEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  productId: string

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
