import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { BusinessModule } from './business/business.module';
import { AppController } from './commons/app/controllers/app.controller';
import { AppService } from './commons/app/services/app.service';
import { ConfigPruebasNestModule } from './config/config.module';
import { DomainModule } from './domain/domain.module';


@Module({
  imports: [ConfigPruebasNestModule, BusinessModule, DomainModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
