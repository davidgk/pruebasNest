import { AdminModule } from '@adminjs/nestjs';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BusinessModule } from './business/business.module';
import { AppController } from './commons/app/controllers/app.controller';
import { AppService } from './commons/app/services/app.service';
import { ConfigProjModule } from './config/config.module';
import { DatabaseModule } from './config/database/database.module';
import { DomainModule } from './domain/domain.module';
import { User } from './domain/user/entities/user.entity';
import { UserService } from './domain/user/services/user.service';

const AdminBroModule = AdminModule.createAdminAsync({
  imports: [TypeOrmModule.forFeature([User])],
  inject: [getRepositoryToken(User)],
  useFactory: (userRep: Repository<User>) => ({
    adminJsOptions: {
      rootPath: '/admin',
      resources: [User]
    },
    auth: {
      authenticate: async (email, password) => {
        const userService = new UserService(userRep);
        return await userService.authenticate(email, password);
      },
      cookieName: 'test',
      cookiePassword: 'testPass'
    }
  })
});

@Module({
  imports: [
    ConfigProjModule,
    DatabaseModule,
    BusinessModule,
    DomainModule,
    AdminBroModule
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
