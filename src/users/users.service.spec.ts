import { Test, TestingModule } from "@nestjs/testing"
import { UsersService } from "./users.service"
import { PrismaService } from "../prisma/prisma.service"
import { mockedDate, mockedPrismaService } from "../../test/mocks"
import { CreateUserDto } from "./dto/create-user.dto"
import { UserRole } from "../types"
import { UpdateUserDto } from "./dto/update-user.dto"

describe("UsersService", () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockedPrismaService()
        }
      ]
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create a user", async () => {
    const dto: CreateUserDto = {
      email: "fake-test@faker.com",
      firstName: "Fake test",
      lastName: "Faker test",
      role: "CLIENT",
      avatar: {
        url: "https://fake.com/avatar.jpg",
        name: "avatar.jpg"
      }
    }
    expect(await service.create(dto)).toEqual(dto)
  })

  it("should find one user by Id", async () => {
    expect(await service.findById("1")).toEqual({
      id: "1",
      email: "fake@faker.com",
      firstName: "Fake",
      lastName: "Faker",
      role: UserRole.ROOT,
      createdAt: new Date(mockedDate),
      updatedAt: new Date(mockedDate),
      avatar: {
        id: "1",
        url: "https://fake.com/avatar.jpg",
        name: "fake-avatar.jpg",
        userId: "1",
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate)
      }
    })
  })

  it("should update a user", async () => {
    const dto: UpdateUserDto = {
      firstName: "Fake test updated"
    }
    expect(await service.update("1", dto)).toEqual({
      id: "1",
      email: "fake@faker.com",
      firstName: "Fake test updated",
      lastName: "Faker",
      role: UserRole.ROOT,
      avatar: {
        id: "1",
        url: "https://fake.com/avatar.jpg",
        name: "fake-avatar.jpg",
        userId: "1",
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate)
      },
      createdAt: new Date(mockedDate),
      updatedAt: new Date(mockedDate)
    })
  })

  it("should remove a user", async () => {
    expect(await service.remove("1")).toEqual({
      id: "1",
      email: "fake@faker.com",
      firstName: "Fake",
      lastName: "Faker",
      role: UserRole.ROOT,
      createdAt: new Date(mockedDate),
      updatedAt: new Date(mockedDate),
      avatar: {
        id: "1",
        url: "https://fake.com/avatar.jpg",
        name: "fake-avatar.jpg",
        userId: "1",
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate)
      }
    })
  })
})
