import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserModule } from '../user/user.module';
import { NodeMailerModule } from './modemailer.module';
import { AppService } from '../services/app.service';

@Module({
  imports: [NodeMailerModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
