import { Module } from '@nestjs/common';
import { NodeMailerTestController } from '../controllers/node-mailer-test/node-mailer-test.controller';

@Module({
  imports: [],
  controllers: [NodeMailerTestController],
  providers: []
})
export class NodeMailerModule {}
