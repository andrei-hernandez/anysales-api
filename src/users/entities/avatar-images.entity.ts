import { AvatarImage as AvatarImageEntity } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"

export class AvatarImage implements AvatarImageEntity {
  constructor(partial: Partial<AvatarImageEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  userId: string

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  createdAt: Date
}
