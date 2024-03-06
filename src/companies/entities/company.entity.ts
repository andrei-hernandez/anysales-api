import { ApiProperty } from "@nestjs/swagger"
import { Company as CompanyEntity } from "@prisma/client"
import { JsonValue } from "@prisma/client/runtime/library"
import { CompanyCategory } from "../../types/"

export class Company implements CompanyEntity {
  constructor(partial: Partial<CompanyEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  category: CompanyCategory

  @ApiProperty()
  slug: string

  @ApiProperty()
  citySlug: string

  @ApiProperty()
  landingLayout: JsonValue

  @ApiProperty()
  landingContent: JsonValue

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
