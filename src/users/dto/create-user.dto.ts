import { ApiProperty } from "@nestjs/swagger"
import { UserRole } from "../../types"

export class CreateUserDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  role: UserRole
}
