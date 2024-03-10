import { Test, TestingModule } from "@nestjs/testing"
import { CompaniesController } from "./companies.controller"
import { CompaniesService } from "./companies.service"
import { mockedCompaniesService, mockedDate } from "../../test/mocks"
import { CompanyCategory, UserRole } from "../types"
import { CreateCompanyDto } from "./dto/create-company.dto"

describe("CompaniesController", () => {
  let controller: CompaniesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        {
          provide: CompaniesService,
          useValue: mockedCompaniesService()
        }
      ]
    }).compile()

    controller = module.get<CompaniesController>(CompaniesController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })

  it("should create a company", async () => {
    const dto: CreateCompanyDto = {
      name: "Company 4",
      slug: "company-4",
      citySlug: "city-1",
      category: CompanyCategory.FOOD,
      description: "Company 4 description",
      landingContent: {},
      landingLayout: {},
      owners: [{ id: "1" }],
      images: [{ url: "https://fake.com/image.jpg", name: "image.jpg" }]
    }
    expect(await controller.create(dto)).toEqual(dto)
  })

  it("should find a company by id", async () => {
    expect(await controller.findOne("1")).toEqual({
      id: "1",
      name: "Company 1",
      slug: "company-1",
      citySlug: "city-1",
      description: "Company 1 description",
      landingContent: {},
      landingLayout: {},
      category: CompanyCategory.FOOD,
      createdAt: new Date(mockedDate),
      updatedAt: new Date(mockedDate),
      owners: [
        {
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
        }
      ]
    })
  })

  it("should get the companies by a citySlug", async () => {
    expect(await controller.findAllCompaniesFromCity("city-1")).toEqual([
      {
        id: "1",
        name: "Company 1",
        slug: "company-1",
        citySlug: "city-1",
        description: "Company 1 description",
        landingContent: {},
        landingLayout: {},
        category: CompanyCategory.FOOD,
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate),
        owners: [
          {
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
          }
        ]
      },
      {
        id: "2",
        name: "Company 2",
        slug: "company-2",
        citySlug: "city-1",
        description: "Company 2 description",
        landingContent: {},
        landingLayout: {},
        category: CompanyCategory.FOOD,
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate),
        owners: [
          {
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
          }
        ]
      }
    ])
  })

  it("should update a company", async () => {
    const dto = {
      name: "Company 4",
      slug: "company-4",
      citySlug: "city-1",
      description: "Company 4 description",
      landingContent: {},
      landingLayout: {}
    }
    expect(await controller.update("1", dto)).toEqual({
      id: "1",
      name: "Company 4",
      slug: "company-4",
      citySlug: "city-1",
      description: "Company 4 description",
      landingContent: {},
      landingLayout: {},
      category: "FOOD",
      owners: [
        {
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
        }
      ],
      updatedAt: new Date(mockedDate),
      createdAt: new Date(mockedDate)
    })
  })

  it("should delete a company", async () => {
    expect(await controller.remove("1")).toEqual({
      id: "1",
      name: "Company 1",
      slug: "company-1",
      citySlug: "city-1",
      description: "Company 1 description",
      landingContent: {},
      landingLayout: {},
      category: "FOOD",
      owners: [
        {
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
        }
      ],
      updatedAt: new Date(mockedDate),
      createdAt: new Date(mockedDate)
    })
  })
})
