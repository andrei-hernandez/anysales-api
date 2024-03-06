import {
  Body,
  Post,
  Controller,
  Param,
  Get,
  HttpException,
  Query,
  Patch,
  Delete,
  Logger
} from "@nestjs/common"
import { CompaniesService } from "./companies.service"
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { Company } from "./entities/company.entity"
import { CreateCompanyDto } from "./dto/create-company.dto"
import { UpdateCompanyDto } from "./dto/update-company.dto"

@Controller("companies")
@ApiTags("companies")
export class CompaniesController {
  logEntity = "Companies Controller"
  constructor(private readonly companiesService: CompaniesService) {}

  @Post("create")
  @ApiCreatedResponse({ type: Company })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    new Logger(this.logEntity).log("executing create controller")
    return this.companiesService.create(createCompanyDto)
  }

  @Get(":id")
  @ApiOkResponse({ type: Company })
  findOne(@Param("id") id: string) {
    new Logger("Companies Controller").log("executing find one controller")
    return this.companiesService.findOne(id)
  }

  @Get("city/:citySlug")
  @ApiOkResponse({ type: Company, isArray: true })
  findAllCompaniesFromCity(@Query("citySlug") citySlug: string) {
    if (!citySlug) {
      throw new HttpException("City slug is required", 400)
    }
    new Logger(this.logEntity).log(
      "executing find all companies from city controller"
    )
    return this.companiesService.findAll(citySlug)
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: Company })
  update(@Param("id") id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    new Logger(this.logEntity).log("executing update controller")
    return this.companiesService.update(id, updateCompanyDto)
  }

  @Delete(":id")
  @ApiOkResponse({ type: Company })
  remove(@Param("id") id: string) {
    new Logger(this.logEntity).log("executing remove controller")
    return this.companiesService.remove(id)
  }
}
