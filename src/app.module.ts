import { AdminModule, AdminModuleOptions } from '@adminjs/nestjs';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { BusinessModule } from './business/business.module';
import { AppController } from './commons/app/controllers/app.controller';
import { AppService } from './commons/app/services/app.service';
import { ConfigProjModule } from './config/config.module';
import { DatabaseModule } from './config/database/database.module';
import { DomainModule } from './domain/domain.module';
import { User } from './domain/user/entities/user.entity';

@Module({
  imports: [
    ConfigProjModule,
    DatabaseModule,
    BusinessModule,
    DomainModule,
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [User]
      },
      auth: {
        authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
        cookieName: 'test',
        cookiePassword: 'testPass',
      }
    })
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    AppService
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
