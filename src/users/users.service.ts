import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./entities/users.entity"
import { UpdateUserDto } from "./dto/update-user.dto"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        avatar: {
          create: createUserDto.avatar
        }
      },
      include: { avatar: true }
    })
  }

  async findById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { avatar: true }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        avatar: {
          update: updateUserDto.avatar
        }
      },
      include: { avatar: true }
    })
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
      include: { avatar: true }
    })
  }
}
