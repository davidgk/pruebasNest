import { Module } from '@nestjs/common';
import { NodeMailerModule } from './node-mailer-test/modemailer.module';

@Module({
  imports: [NodeMailerModule],
  providers: []
})
export class BusinessModule {}
