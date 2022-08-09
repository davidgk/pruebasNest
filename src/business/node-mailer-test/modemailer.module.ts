import { Module } from '@nestjs/common';
import { NodeMailerTestController } from './controller/node-mailer-test.controller';

@Module({
  imports: [],
  controllers: [NodeMailerTestController],
  providers: []
})
export class NodeMailerModule {}
