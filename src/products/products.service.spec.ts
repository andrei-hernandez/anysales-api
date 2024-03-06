import { Test, TestingModule } from "@nestjs/testing"
import { ProductsService } from "./products.service"
import { PrismaService } from "../prisma/prisma.service"
import { CreateProductDto } from "./dto/ create-product.dto"
import { mockedProductsData, mockedPrismaService } from "../../test/mocks/"
import { UpdateProductDto } from "./dto/update-product.dto"

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
      isBestSeller: true
    }
    expect(await service.update("1", dto)).toEqual({
      ...mockedProductsData[0],
      ...dto
    })
  })

  it("should remove a product", async () => {
    expect(await service.remove("1")).toEqual(
      mockedProductsData.filter(product => product.id !== "1")
    )
  })
})
