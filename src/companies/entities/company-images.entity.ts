import { ApiProperty } from "@nestjs/swagger"
import { CompanyImage as CompanyImageEntity } from "@prisma/client"

export class CompanyImage implements CompanyImageEntity {
  constructor(partial: Partial<CompanyImageEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty({
    example: "1"
  })
  id: string

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  companyId: string

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
