import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

const configParam = {
  // TODO: ver de agregar otros ambientes
  envFilePath: ['.env.dev'],
  isGlobal: true
};

@Module({
  imports: [ConfigModule.forRoot(configParam), DatabaseModule]
})
export class ConfigPruebasNestModule {}
