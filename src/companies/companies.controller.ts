import {
  Body,
  Post,
  Controller,
  Param,
  Get,
  HttpException,
  Query,
  Patch,
  Delete
} from "@nestjs/common"
import { CompaniesService } from "./companies.service"
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { Company } from "./entities/company.entities"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"

@Controller("companies")
@ApiTags("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post("create")
  @ApiCreatedResponse({ type: Company })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto)
  }

  @Get(":id")
  @ApiOkResponse({ type: Company })
  findOne(@Param("id") id: string) {
    return this.companiesService.findOne(id)
  }

  @Get("city/:citySlug")
  @ApiOkResponse({ type: Company, isArray: true })
  findAllCompaniesFromCity(@Query("citySlug") citySlug: string) {
    if (!citySlug) {
      throw new HttpException("City slug is required", 400)
    }
    return this.companiesService.findAll(citySlug)
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: Company })
  update(@Param("id") id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(id, updateCompanyDto)
  }

  @Delete(":id")
  @ApiOkResponse({ type: Company })
  remove(@Param("id") id: string) {
    return this.companiesService.remove(id)
  }
}

/*
@Get(':id/products')
@ApiOkResponse({ type: Product, isArray: true })
findAllProductsOfStore(@Param('id') id: string) {
  return this.storesService.findAllProductsOfStore(+id);
}
*/
