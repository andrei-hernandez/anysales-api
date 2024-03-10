import { CreateCompanyDto } from "../../src/companies/dto/create-company.dto"
import { UpdateCompanyDto } from "../../src/companies/dto/update-company.dto"
import {
  mockedCompaniesData,
  mockedProductsData,
  mockedUsersData
} from "./mockedData"
import { UpdateProductDto } from "../../src/products/dto/update-product.dto"
import { Product } from "../../src/products/entities/products.entity"
import { CreateProductDto } from "../../src/products/dto/ create-product.dto"
import { Company } from "../../src/companies/entities/company.entity"
import { User } from "../../src/users/entities/users.entity"
import { UpdateUserDto } from "../../src/users/dto/update-user.dto"
import { CreateUserDto } from "../../src/users/dto/create-user.dto"
import { CreateProductImageDto } from "../../src/products/dto/create-product-image.dto"
import { UpdateCompanyImageDto } from "../../src/companies/dto/update-company-image.dto"

interface whereArgs<T, G> {
  where: T
  data?: G
}

export const mockedPrismaService = () => ({
  product: {
    create: jest.fn(({ data: CreateProductDto }) => {
      return { ...CreateProductDto, images: CreateProductDto.images.create }
    }),
    findMany: jest.fn(
      ({ where: { companyId } }: whereArgs<Product, CreateProductDto>) => {
        return mockedProductsData.filter(
          product => product.companyId === companyId
        )
      }
    ),
    update: jest.fn(
      ({
        where: { id },
        data
      }: whereArgs<
        Product,
        Omit<CreateProductDto, "images"> & {
          images: { create: CreateProductImageDto[] }
        }
      >) => {
        const product = mockedProductsData.find(product => product.id === id)
        return { ...product, ...data, images: data.images.create }
      }
    ),
    findUnique: jest.fn(
      ({ where: { id } }: whereArgs<Product, CreateProductDto>) => {
        return mockedProductsData.find(product => product.id === id)
      }
    ),
    delete: jest.fn(
      ({ where: { id } }: whereArgs<Product, CreateProductDto>) => {
        mockedProductsData.filter(product => product.id !== id)
        // by default the .delete() of the model returns the element that was deleted
        return mockedProductsData.find(product => product.id === id)
      }
    )
  },
  company: {
    create: jest.fn(({ data: CreateCompanyDto }) => {
      return {
        ...CreateCompanyDto,
        images: CreateCompanyDto.images.create,
        owners: CreateCompanyDto.owners.connect
      }
    }),
    findMany: jest.fn(
      ({ where: { citySlug } }: whereArgs<Company, CreateCompanyDto>) => {
        return mockedCompaniesData.filter(
          company => company.citySlug === citySlug
        )
      }
    ),
    update: jest.fn(
      ({
        where: { id },
        data
      }: whereArgs<
        Company,
        Omit<UpdateCompanyDto, "images" | "owners"> & {
          images: { create: UpdateCompanyImageDto[] }
          owners: { connect: { id: string }[] }
        }
      >) => {
        const company = mockedCompaniesData.find(company => company.id === id)
        return {
          ...company,
          ...data,
          images: data.images.create,
          owners: data.owners.connect
        }
      }
    ),
    findUnique: jest.fn(
      ({ where: { id } }: whereArgs<Company, CreateCompanyDto>) => {
        return mockedCompaniesData.find(company => company.id === id)
      }
    ),
    delete: jest.fn(
      ({ where: { id } }: whereArgs<Company, CreateCompanyDto>): Company => {
        mockedCompaniesData.filter(company => company.id !== id)
        // by default the .delete() of the model returns the element that was deleted
        return mockedCompaniesData.find(company => company.id === id)
      }
    )
  },
  user: {
    create: jest.fn(({ data: CreateUserDto }) => {
      return {
        ...CreateUserDto,
        avatar: CreateUserDto.avatar.create
      }
    }),
    update: jest.fn(
      ({
        where: { id },
        data: { avatar, ...data }
      }: whereArgs<User, UpdateUserDto>) => {
        const user = mockedUsersData.find(user => user.id === id)
        return { ...user, ...data, avatar: { ...avatar, ...user.avatar } }
      }
    ),
    findUnique: jest.fn(({ where: { id } }: whereArgs<User, CreateUserDto>) => {
      return mockedUsersData.find(user => user.id === id)
    }),
    delete: jest.fn(({ where: { id } }: whereArgs<User, CreateUserDto>) => {
      mockedUsersData.filter(user => user.id !== id)
      // by default the .delete() of the model returns the element that was deleted
      return mockedUsersData.find(user => user.id === id)
    })
  }
})

export const mockedCompaniesService = () => ({
  create: jest.fn(data => {
    return {
      ...data,
      images: data.images,
      owners: data.owners
    }
  }),
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
  remove: jest.fn((id: string): Company => {
    mockedCompaniesData.filter(company => company.id !== id)
    // by default the .delete() of the model returns the element that was deleted
    return mockedCompaniesData.find(company => company.id === id)
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

export const mockedUsersService = () => ({
  create: jest.fn((dto: CreateUserDto) => ({ ...dto })),
  findById: jest.fn((id: string) => {
    return mockedUsersData.find(user => user.id === id)
  }),
  update: jest.fn((id: string, dto: UpdateUserDto) => {
    const user = mockedUsersData.find(user => user.id === id)
    return { ...user, ...dto }
  }),
  remove: jest.fn((id: string): User => {
    mockedUsersData.filter(user => user.id !== id)
    // by default the .delete() of the model returns the element that was deleted
    return mockedUsersData.find(user => user.id === id)
  })
})
