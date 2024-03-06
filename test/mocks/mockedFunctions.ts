import { CreateCompanyDto } from "../../src/companies/dto/create-company.dto"
import { UpdateCompanyDto } from "../../src/companies/dto/update-company.dto"
import { mockedCompaniesData, mockedProductsData } from "./mockedData"
import { UpdateProductDto } from "../../src/products/dto/update-product.dto"
import { Product } from "../../src/products/entities/products.entity"
import { CreateProductDto } from "../../src/products/dto/ create-product.dto"
import { Company } from "../../src/companies/entities/company.entity"

interface whereArgs<T, G> {
  where: T
  data?: G
}

export const mockedPrismaService = () => ({
  product: {
    create: jest.fn(({ data: CreateProductDto }) => ({ ...CreateProductDto })),
    findMany: jest.fn(
      ({ where: { companyId } }: whereArgs<Product, CreateProductDto>) => {
        return mockedProductsData.filter(
          product => product.companyId === companyId
        )
      }
    ),
    update: jest.fn(
      ({ where: { id }, data }: whereArgs<Product, UpdateProductDto>) => {
        const product = mockedProductsData.find(product => product.id === id)
        return { ...product, ...data }
      }
    ),
    findUnique: jest.fn(
      ({ where: { id } }: whereArgs<Product, CreateProductDto>) => {
        return mockedProductsData.find(product => product.id === id)
      }
    ),
    delete: jest.fn(
      ({ where: { id } }: whereArgs<Product, CreateProductDto>) => {
        return mockedProductsData.filter(product => product.id !== id)
      }
    )
  },
  company: {
    create: jest.fn(({ data: CreateCompanyDto }) => ({ ...CreateCompanyDto })),
    findMany: jest.fn(
      ({ where: { citySlug } }: whereArgs<Company, CreateCompanyDto>) => {
        return mockedCompaniesData.filter(
          company => company.citySlug === citySlug
        )
      }
    ),
    update: jest.fn(
      ({ where: { id }, data }: whereArgs<Company, UpdateCompanyDto>) => {
        const company = mockedCompaniesData.find(company => company.id === id)
        return { ...company, ...data }
      }
    ),
    findUnique: jest.fn(
      ({ where: { id } }: whereArgs<Company, CreateCompanyDto>) => {
        return mockedCompaniesData.find(company => company.id === id)
      }
    ),
    delete: jest.fn(
      ({ where: { id } }: whereArgs<Company, CreateCompanyDto>) => {
        return mockedCompaniesData.filter(company => company.id !== id)
      }
    )
  }
})

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

export const mockedProductsService = () => ({
  create: jest.fn((dto: CreateCompanyDto) => ({ ...dto })),
  findAllProductsOfCompany: jest.fn((companyId: string) => {
    return mockedProductsData.filter(product => product.companyId === companyId)
  }),
  findOne: jest.fn((id: string) => {
    return mockedProductsData.find(product => product.id === id)
  }),
  update: jest.fn((id: string, dto: UpdateProductDto) => {
    const product: Product = mockedProductsData.find(
      product => product.id === id
    )
    return { ...product, ...dto }
  }),
  remove: jest.fn((id: string): Product => {
    mockedProductsData.filter(product => product.id !== id)
    // by default the .delete() of the model returns the element that was deleted
    return mockedProductsData.find(product => product.id === id)
  })
})
