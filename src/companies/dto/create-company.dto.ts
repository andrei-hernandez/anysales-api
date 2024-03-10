import { ApiProperty } from "@nestjs/swagger"
import { JsonValue } from "@prisma/client/runtime/library"
import { CompanyCategory } from "../../types/"
import { User } from "../../users/entities/users.entity"
import { CreateCompanyImageDto } from "./create-company-image.dto"

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
  owners: Array<Pick<User, "id">>

  @ApiProperty()
  images?: Array<CreateCompanyImageDto>

  @ApiProperty()
  landingLayout: JsonValue

  @ApiProperty()
  landingContent: JsonValue
}
