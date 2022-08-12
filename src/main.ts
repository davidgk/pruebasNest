import { Database, Resource } from '@adminjs/typeorm';
import { NestFactory } from '@nestjs/core';
import AdminJS from 'adminjs';
import { validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // si queremos inyectar cosas no es le mejor approach
  // app.useGlobalPipes(new ValidationPipe());
  Resource.validate = validate;
  AdminJS.registerAdapter({ Database, Resource });
  await app.listen(3000);
}
bootstrap();
