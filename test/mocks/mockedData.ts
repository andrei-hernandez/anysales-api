import { Company } from "../../src/companies/entities/company.entity"
import { CompanyCategory, ProductCategory, UserRole } from "../../src/types"
import { Product } from "../../src/products/entities/products.entity"
import { User } from "../../src/users/entities/users.entity"

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
export const mockedProductsData: Array<Product> = [
  {
    id: "1",
    name: "Product 1",
    description: "Product 1 description",
    price: 10,
    stock: 100,
    sku: "product-1",
    category: ProductCategory.SERVICE,
    isBestSeller: true,
    companyId: "1",
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  },
  {
    id: "2",
    name: "Product 2",
    description: "Product 2 description",
    price: 10,
    stock: 100,
    sku: "product-2",
    category: ProductCategory.FOOD,
    isBestSeller: true,
    companyId: "1",
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  },
  {
    id: "3",
    name: "Product 3",
    description: "Product 3 description",
    price: 10,
    stock: 100,
    sku: "product-3",
    category: ProductCategory.FOOD,
    isBestSeller: true,
    companyId: "2",
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  }
]

export const mockedUsersData: Array<User> = [
  {
    id: "1",
    email: "fake@faker.com",
    firstName: "Fake",
    lastName: "Faker",
    role: UserRole.ROOT,
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  },
  {
    id: "2",
    email: "fake2@faker.com",
    firstName: "Fake2",
    lastName: "Faker2",
    role: UserRole.CLIENT,
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  },
  {
    id: "3",
    email: "fake3@faker.com",
    firstName: "Fake3",
    lastName: "Faker3",
    role: UserRole.OWNER,
    createdAt: new Date(mockedDate),
    updatedAt: new Date(mockedDate)
  }
]
