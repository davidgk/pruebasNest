import { DataSource } from 'typeorm';
import { typeOrmConfig } from './databaseConfig.service';

console.log('NODE_ENV:', process.env.NODE_ENV);
export const dataSourceInstance = new DataSource(typeOrmConfig);
