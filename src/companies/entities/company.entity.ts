import { ApiProperty } from "@nestjs/swagger"
import { Company as CompanyEntity } from "@prisma/client"
import { JsonValue } from "@prisma/client/runtime/library"
import { CompanyCategory } from "../../types/"
import { User } from "../../users/entities/users.entity"
import { CompanyImage } from "./company-images.entity"

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
  owners: Array<User>

  @ApiProperty()
  images?: Array<CompanyImage>

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
