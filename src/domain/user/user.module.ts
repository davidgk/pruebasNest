import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, LoggingInterceptor]
})
export class UserModule {}
