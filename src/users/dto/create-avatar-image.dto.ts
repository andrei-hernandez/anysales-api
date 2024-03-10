import { ApiProperty } from "@nestjs/swagger"

export class CreateAvatarImageDto {
  @ApiProperty()
  url: string

  @ApiProperty()
  name: string
}
