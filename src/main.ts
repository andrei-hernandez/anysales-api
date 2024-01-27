import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Anysales API")
    .setDescription("Anysales API description")
    .setVersion("0.1")
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("api", app, swaggerDocument)

  const PORT = process.env.PORT || 4000
  await app.listen(PORT)
}
bootstrap().then(() => null)
