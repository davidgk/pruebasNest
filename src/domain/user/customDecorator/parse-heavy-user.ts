import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParseHeavyProcess = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const body = request.body;
    body.nombre = 'juan carlos';
    return body;
  },
);
