import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CompaniesModule } from "./companies/companies.module"
import { ProductsService } from "./products/products.service"
import { ConfigModule } from "@nestjs/config"
import { ProductsController } from "./products/products.controller"
import { ProductsModule } from "./products/products.module"
import { PrismaModule } from "./prisma/prisma.module"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    CompaniesModule,
    ProductsModule,
    UsersModule
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes("*")
  }
}
