import { Test, TestingModule } from "@nestjs/testing"
import { CompaniesService } from "./companies.service"
import { PrismaService } from "../prisma/prisma.service"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"
import { mockedCompaniesData, mockedCompaniesService } from "../../test/mocks"
import { CompanyCategory } from "../types"

describe("CompaniesService", () => {
  let service: CompaniesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        PrismaService,
        {
          provide: CompaniesService,
          useValue: mockedCompaniesService()
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
      category: CompanyCategory.FOOD
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
      category: CompanyCategory.FOOD
    }
    expect(await service.update("1", dto)).toEqual({
      ...mockedCompaniesData[0],
      ...dto
    })
  })

  it("should remove a company", async () => {
    expect(await service.remove("1")).toEqual(
      mockedCompaniesData.filter(company => company.id !== "1")
    )
  })
})
