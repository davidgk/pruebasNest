import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';

export const testTypeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<any> => {
    return {
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.TYPEORM_PORT),
      database: 'pruebas_test',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      logging: true,
      migrationsRun: true,
      entities: ['../dist/src/domain/**/*.entity.js'],
      migrations: ['../dist/src/config/database/migrations/*.{ts,js}'],
      logger: 'file',
      autoLoadEntities: true
    };
  }
};

export async function getTestConnection() {
  return await createConnection({
    type: 'postgres',
    database: 'pruebas_test',
    username: 'postgres',
    password: 'postgres',
    dropSchema: true,
    entities: ['../dist/src/domain/**/*.entity.js'],
    migrations: ['../dist/src/config/database/migrations/*.{ts,js}'],
    synchronize: true,
    logging: false,
    migrationsRun: false,
    name: 'testConnectionName'
  });
}
