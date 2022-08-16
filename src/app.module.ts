import { AdminModule, AdminModuleOptions } from '@adminjs/nestjs';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CurrentAdmin } from 'adminjs';
import { DataSource, Repository } from 'typeorm';
import { BusinessModule } from './business/business.module';
import { AppController } from './commons/app/controllers/app.controller';
import { AppService } from './commons/app/services/app.service';
import { ConfigProjModule } from './config/config.module';
import { DatabaseModule } from './config/database/database.module';
import { DomainModule } from './domain/domain.module';
import { User } from './domain/user/entities/user.entity';
import bcrypt from 'bcrypt';

@Module({
  imports: [
    ConfigProjModule,
    DatabaseModule,
    BusinessModule,
    DomainModule,
    AdminModule.createAdminAsync({
      imports: [TypeOrmModule.forFeature([User])],
      inject: [getRepositoryToken(User)],
      useFactory: (userRep: Repository<User>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [User]
        },
        auth: {
          authenticate: async (email, password) => {
            const user = await userRep.findOne({ where: { email } });
            if (!user) return;
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) return;

            return user as unknown as CurrentAdmin;
          },
          cookieName: 'test',
          cookiePassword: 'testPass'
        }
      })
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
