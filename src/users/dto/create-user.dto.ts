import { ApiProperty } from "@nestjs/swagger"
import { UserRole } from "../../types"
import { CreateAvatarImageDto } from "./create-avatar-image.dto"

export class CreateUserDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  role: UserRole

  @ApiProperty()
  avatar: CreateAvatarImageDto
}
