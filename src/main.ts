import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // si queremos inyectar cosas no es le mejor approach
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
