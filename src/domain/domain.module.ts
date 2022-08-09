import { Module } from '@nestjs/common';
import { RolesGuard } from './roles/helpers/roles.guard';
import { RolesModule } from './roles/rol.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, RolesModule],
})
export class DomainModule {}
