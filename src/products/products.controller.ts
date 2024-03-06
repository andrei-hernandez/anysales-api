import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post
} from "@nestjs/common"
import { ProductsService } from "./products.service"
import { Product } from "./entities/products.entity"
import { ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger"
import { CreateProductDto } from "./dto/ create-product.dto"
import { UpdateProductDto } from "./dto/update-product.dto"

@Controller("products")
export class ProductsController {
  logEntity = "Products Controller"
  constructor(private readonly productsService: ProductsService) {}

  @Post("create")
  @ApiCreatedResponse({ type: Product })
  create(@Body() createProductDto: CreateProductDto) {
    new Logger(this.logEntity).log("executing create controller")
    return this.productsService.create(createProductDto)
  }

  @Get(":id")
  @ApiOkResponse({ type: Product })
  findOne(@Param("id") id: string) {
    new Logger(this.logEntity).log("executing find one controller")
    return this.productsService.findOne(id)
  }

  @Get("company/:companyId")
  @ApiOkResponse({ type: Product, isArray: true })
  findAllProductsFromCompany(@Param("companyId") companyId: string) {
    new Logger(this.logEntity).log(
      "executing find all products from company controller"
    )
    return this.productsService.findAllProductsOfCompany(companyId)
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: Product })
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    new Logger(this.logEntity).log("executing update controller")
    return this.productsService.update(id, updateProductDto)
  }

  @Delete(":id")
  @ApiOkResponse({ type: Product })
  remove(@Param("id") id: string) {
    new Logger(this.logEntity).log("executing remove controller")
    return this.productsService.remove(id)
  }
}
