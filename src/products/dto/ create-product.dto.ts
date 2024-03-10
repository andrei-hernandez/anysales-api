import { ApiProperty } from "@nestjs/swagger"
import { ProductCategory } from "../../types"
import { CreateProductImageDto } from "./create-product-image.dto"

export class CreateProductDto {
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
  images: Array<CreateProductImageDto>

  @ApiProperty()
  stock: number
}
