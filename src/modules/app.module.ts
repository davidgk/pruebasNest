import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from '../controllers/app.controller';
import { DomainModule } from '../domain/domain.module';
import { AppService } from '../services/app.service';
import { NodeMailerModule } from './modemailer.module';

@Module({
  imports: [NodeMailerModule, DomainModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService
  ]
})
export class AppModule {}
