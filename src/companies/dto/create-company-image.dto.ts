import { ApiProperty } from "@nestjs/swagger"

export class CreateCompanyImageDto {
  @ApiProperty()
  url: string

  @ApiProperty()
  name: string
}
