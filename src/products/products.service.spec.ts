import { Test, TestingModule } from "@nestjs/testing"
import { ProductsService } from "./products.service"
import { PrismaService } from "../prisma/prisma.service"
import { CreateProductDto } from "./dto/ create-product.dto"
import {
  mockedProductsData,
  mockedPrismaService,
  mockedDate
} from "../../test/mocks/"
import { UpdateProductDto } from "./dto/update-product.dto"
import { ProductCategory } from "../types"

describe("ProductsService", () => {
  let service: ProductsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PrismaService,
          useValue: mockedPrismaService()
        }
      ]
    }).compile()

    service = module.get<ProductsService>(ProductsService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create a product", async () => {
    const dto: CreateProductDto = {
      name: "Product 4",
      description: "Product 4 description",
      price: 10,
      stock: 100,
      sku: "product-4",
      category: "FOOD",
      images: [
        {
          url: "https://fake.com/image.jpg",
          name: "image.jpg"
        }
      ],
      isBestSeller: true
    }
    expect(await service.create(dto)).toEqual(dto)
  })

  it("should find one product", async () => {
    expect(await service.findOne("1")).toEqual(mockedProductsData[0])
  })

  it("should update a product", async () => {
    const dto: UpdateProductDto = {
      name: "Product 4",
      description: "Product 4 description",
      price: 10,
      stock: 100,
      sku: "product-4",
      category: "FOOD",
      isBestSeller: true,
      images: [
        {
          url: "https://fake.com/image.jpg",
          name: "image.jpg"
        }
      ]
    }
    expect(await service.update("1", dto)).toEqual({
      ...mockedProductsData[0],
      ...dto
    })
  })

  it("should remove a product", async () => {
    expect(await service.remove("1")).toEqual({
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
    })
  })
})
