import { ApiProperty } from "@nestjs/swagger"

export class CreateProductImageDto {
  @ApiProperty()
  url: string

  @ApiProperty()
  name: string
}
