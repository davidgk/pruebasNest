import { DataSource } from 'typeorm';
import { typeOrmConfig } from './databaseConfig.service';
export const dataSourceInstance = new DataSource(typeOrmConfig);
