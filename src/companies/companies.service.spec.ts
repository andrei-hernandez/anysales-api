import { Test, TestingModule } from "@nestjs/testing"
import { CompaniesService } from "./companies.service"
import { PrismaService } from "../prisma/prisma.service"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"
import {
  mockedCompaniesData,
  mockedDate,
  mockedPrismaService
} from "../../test/mocks/"
import { CompanyCategory, UserRole } from "../types"

describe("CompaniesService", () => {
  let service: CompaniesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: PrismaService,
          useValue: mockedPrismaService()
        }
      ]
    }).compile()

    service = module.get<CompaniesService>(CompaniesService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create a company", async () => {
    const dto: CreateCompanyDto = {
      name: "Company 4",
      slug: "company-4",
      citySlug: "city-1",
      description: "Company 4 description",
      landingContent: {},
      landingLayout: {},
      category: CompanyCategory.FOOD,
      images: [
        {
          url: "https://fake.com/image.jpg",
          name: "image.jpg"
        }
      ],
      owners: [
        {
          id: "1"
        }
      ]
    }
    expect(await service.create(dto)).toEqual(dto)
  })

  it("should find all companies", async () => {
    expect(await service.findAll("city-1")).toEqual(
      mockedCompaniesData.filter(company => company.citySlug === "city-1")
    )
  })

  it("should find one company", async () => {
    expect(await service.findOne("1")).toEqual(mockedCompaniesData[0])
  })

  it("should update a company", async () => {
    const dto: UpdateCompanyDto = {
      name: "Company 4",
      slug: "company-4",
      citySlug: "city-1",
      description: "Company 4 description",
      landingContent: {},
      landingLayout: {},
      category: CompanyCategory.FOOD,
      images: [
        {
          url: "https://fake.com/image.jpg",
          name: "image.jpg"
        }
      ],
      owners: [
        {
          id: "1"
        }
      ]
    }
    expect(await service.update("1", dto)).toEqual({
      ...mockedCompaniesData[0],
      ...dto
    })
  })

  it("should remove a company", async () => {
    expect(await service.remove("1")).toEqual({
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
})
