import { ApiProperty } from "@nestjs/swagger"
import { ProductCategory } from "../../types"

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
  stock: number
}
