import { ApiProperty } from "@nestjs/swagger"
import { JsonValue } from "@prisma/client/runtime/library"
import { CompanyCategory } from "../../types/"

export class CreateCompanyDto {
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
}
