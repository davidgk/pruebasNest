import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

interface MailCreatedInteface {
  message: string;
}

@Controller('node-mailer-test')
export class NodeMailerTestController {
  @Post('/create-email')
  createEmail(@Req() req: Request): MailCreatedInteface {
    return { message: 'Mail created' };
  }
}
