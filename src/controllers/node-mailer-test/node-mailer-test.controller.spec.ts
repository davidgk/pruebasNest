import { Test, TestingModule } from '@nestjs/testing';
import { NodeMailerTestController } from './node-mailer-test.controller';

describe('NodeMailerTestController', () => {
  let controller: NodeMailerTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeMailerTestController]
    }).compile();

    controller = module.get<NodeMailerTestController>(NodeMailerTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
