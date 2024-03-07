import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./entities/users.entity"
import { UpdateUserDto } from "./dto/update-user.dto"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: createUserDto })
  }

  async findById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto })
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}
