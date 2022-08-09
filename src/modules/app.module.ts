import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { NodeMailerTestController } from '../controllers/node-mailer-test/node-mailer-test.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController, NodeMailerTestController],
  providers: [AppService]
})
export class AppModule {}
