import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { mockedUsersService } from "../../test/mocks/mockedFunctions"
import { CreateUserDto } from "./dto/create-user.dto"
import { UserRole } from "../types"
import { mockedDate } from "../../test/mocks"
import { UpdateUserDto } from "./dto/update-user.dto"

describe("UsersController", () => {
  let controller: UsersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockedUsersService()
        }
      ]
    }).compile()

    controller = module.get<UsersController>(UsersController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
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
    expect(await controller.create(dto)).toEqual(dto)
  })

  it("should find a user by id", async () => {
    expect(await controller.findOne("1")).toEqual({
      id: "1",
      email: "fake@faker.com",
      firstName: "Fake",
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

  it("should update a user", async () => {
    const dto: UpdateUserDto = {
      firstName: "Fake test updated"
    }

    expect(await controller.update("1", dto)).toEqual({
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
    expect(await controller.remove("1")).toEqual({
      id: "1",
      email: "fake@faker.com",
      firstName: "Fake",
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
})
