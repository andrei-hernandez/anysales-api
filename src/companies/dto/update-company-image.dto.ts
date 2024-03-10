import { PartialType } from "@nestjs/swagger"
import { CreateCompanyDto } from "./create-company.dto"

export class UpdateCompanyImageDto extends PartialType(CreateCompanyDto) {}
