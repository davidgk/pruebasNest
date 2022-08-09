import { Module } from '@nestjs/common';
import { RolesGuard } from './roles/helpers/RolesGuard';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  providers: [RolesGuard]
})
export class DomainModule {}
