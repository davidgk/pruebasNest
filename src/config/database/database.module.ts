import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './databaseConfig.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
  ]
})
export class DatabaseModule {}
