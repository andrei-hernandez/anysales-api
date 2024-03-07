import { User as UserEntity } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"
import { UserRole } from "../../types"

export class User implements UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial)
  }
  @ApiProperty()
  id: string

  @ApiProperty()
  email: string

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  role: UserRole

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
