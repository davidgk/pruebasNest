import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const configParam = {
  // TODO: ver de agregar otros ambientes
  envFilePath: ['.env.dev'],
  isGlobal: true
};

@Module({
  imports: [ConfigModule.forRoot(configParam)],
})
export class ConfigProjModule {}
