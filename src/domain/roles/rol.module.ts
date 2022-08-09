import { Module } from '@nestjs/common';
import { RolesGuard } from './helpers/roles.guard';

@Module({
  providers:[RolesGuard]
})
export class RolesModule {}
