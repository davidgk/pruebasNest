import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { NodeMailerModule } from './business/node-mailer-test/modemailer.module';
import { AppController } from './commons/app/controllers/app.controller';
import { AppService } from './commons/app/services/app.service';
import { ConfigPruebasNestModule } from './config/config.module';
import { DomainModule } from './domain/domain.module';


@Module({
  // TODO: replace nodemailer por business modu
  imports: [ConfigPruebasNestModule, NodeMailerModule, DomainModule],
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
