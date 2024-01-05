import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.PORT || 3000
  await app.listen(PORT)
}
bootstrap().then(() => null)
