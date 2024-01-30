import { Company } from "../src/companies/entities/company.entities"
import { CompanyCategory } from "../src/types"
import { CreateCompanyDto } from "../src/companies/dto/create-company.dto"
import { UpdateCompanyDto } from "../src/companies/dto/update-company.dto"

export const mockedDate = "2024-01-27T04:29:14.207Z"
export const mockedCompaniesData: Array<Company> = [
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
    updatedAt: new Date(mockedDate)
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
    updatedAt: new Date(mockedDate)
  },
  {
    id: "3",
    name: "Company 3",
    slug: "company-3",
    citySlug: "city-3",
    description: "Company 3 description",
    landingContent: {},
    landingLayout: {},
    category: CompanyCategory.FOOD,
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  }
]

export const mockedCompaniesService = () => ({
  create: jest.fn((dto: CreateCompanyDto) => ({ ...dto })),
  findAll: jest.fn((citySlug: string) => {
    return mockedCompaniesData.filter(company => company.citySlug === citySlug)
  }),
  findOne: jest.fn((id: string) => {
    return mockedCompaniesData.find(company => company.id === id)
  }),
  update: jest.fn((id: string, dto: UpdateCompanyDto) => {
    const company = mockedCompaniesData.find(company => company.id === id)
    return { ...company, ...dto }
  }),
  remove: jest.fn((id: string) => {
    return mockedCompaniesData.filter(company => company.id !== id)
  }),
  findAllProductsOfCompany: jest.fn().mockResolvedValue(mockedCompaniesData[0])
})
