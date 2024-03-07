import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post
} from "@nestjs/common"
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { UsersService } from "./users.service"
import { User } from "./entities/users.entity"
import { CreateUserDto } from "./dto/create-user.dto"
import { Company } from "../companies/entities/company.entity"
import { UpdateUserDto } from "./dto/update-user.dto"

@Controller("users")
@ApiTags("users")
export class UsersController {
  logEntity = "Users Controller"
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @ApiCreatedResponse({ type: User })
  create(@Body() createUserDto: CreateUserDto) {
    new Logger(this.logEntity).log("executing create controller")
    return this.usersService.create(createUserDto)
  }

  @Get(":id")
  @ApiOkResponse({ type: Company })
  findOne(@Param("id") id: string) {
    new Logger(this.logEntity).log("executing find one controller")
    return this.usersService.findById(id)
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: User })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    new Logger(this.logEntity).log("executing update controller")
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(":id")
  @ApiOkResponse({ type: User })
  remove(@Param("id") id: string) {
    new Logger(this.logEntity).log("executing remove controller")
    return this.usersService.remove(id)
  }
}
