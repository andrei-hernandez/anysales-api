import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CompaniesModule } from "./companies/companies.module"

@Module({
  imports: [CompaniesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes("*")
  }
}
