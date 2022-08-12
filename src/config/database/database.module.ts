import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigProjModule } from '../config.module';
import { typeOrmAsyncConfig } from './databaseConfig.service';

@Module({
  imports: [ConfigProjModule, TypeOrmModule.forRootAsync(typeOrmAsyncConfig)]
})
export class DatabaseModule {}
