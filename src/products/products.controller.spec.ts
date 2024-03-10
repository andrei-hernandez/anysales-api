import { Test, TestingModule } from "@nestjs/testing"
import { ProductsController } from "./products.controller"
import { CreateProductDto } from "./dto/ create-product.dto"
import { ProductsService } from "./products.service"
import {
  mockedDate,
  mockedProductsData,
  mockedProductsService
} from "../../test/mocks"
import { ProductCategory } from "../types"

describe("ProductsController", () => {
  let controller: ProductsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: mockedProductsService()
        }
      ]
    }).compile()

    controller = module.get<ProductsController>(ProductsController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })

  it("should create a product", async () => {
    const dto: CreateProductDto = {
      name: "Product 4",
      description: "Product 4 description",
      stock: 100,
      sku: "product-4",
      category: "SERVICE",
      price: 10,
      isBestSeller: true,
      images: [
        {
          url: "https://fake.com/image.jpg",
          name: "image.jpg"
        }
      ]
    }
    expect(await controller.create(dto)).toEqual(dto)
  })

  it("should find a product by id", async () => {
    expect(await controller.findOne("1")).toEqual({
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

  it("should get the products from a company by a CompanyID", async () => {
    expect(await controller.findAllProductsFromCompany("1")).toEqual(
      mockedProductsData.filter(product => product.companyId === "1")
    )
  })

  it("should update a product", async () => {
    expect(await controller.update("1", { name: "Product 1 updated" })).toEqual(
      {
        id: "1",
        name: "Product 1 updated",
        description: "Product 1 description",
        price: 10,
        stock: 100,
        sku: "product-1",
        category: ProductCategory.SERVICE,
        isBestSeller: true,
        companyId: "1",
        createdAt: new Date(mockedDate),
        updatedAt: new Date(mockedDate)
      }
    )
  })

  it("should remove a product", async () => {
    expect(await controller.remove("1")).toEqual(
      mockedProductsData.find(product => product.id === "1")
    )
  })
})
