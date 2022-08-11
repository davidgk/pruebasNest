import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
// @Injectable()
// export class TypeOrmConfigService implements TypeOrmOptionsFactory {
//   @Inject(ConfigService)
//   private readonly config: ConfigService;
//
//   public createTypeOrmOptions(): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: this.config.get<string>('TYPEORM_HOST'),
//       port: this.config.get<number>('TYPEORM_PORT'),
//       database: this.config.get<string>('TYPEORM_DATABASE'),
//       username: this.config.get<string>('TYPEORM_USERNAME'),
//       password: this.config.get<string>('TYPEORM_PASSWORD'),
//       synchronize: this.config.get<boolean>('TYPEORM_SYNCHRONIZE'),
//       logging: this.config.get<boolean>('TYPEORM_LOGGING'),
//       migrationsRun: this.config.get<boolean>('TYPEORM_MIGRATIONS_RUN'),
//       entities: [
//         'dist/src/domain/**/*.entity.js',
//         'node_modules/nestjs-admin/dist/**/*.entity.js'
//       ],
//       migrations: ['dist/migrations/*.{ts,js}'],
//       migrationsTableName: 'typeorm_migrations',
//       logger: 'file',
//       autoLoadEntities: true
//     };
//   }
// }

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<any> => {
    return {
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      synchronize: false,
      logging: true,
      migrationsRun: false,
      entities: ['dist/src/domain/**/*.entity.js'],
      migrations: ['dist/src/config/database/migrations/*.{ts,js}'],
      cli: {
        migrationsDir: __dirname + '/../migrations'
      },
      migrationsTableName: 'migrations',
      logger: 'file',
      autoLoadEntities: true
    };
  }
};

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) || 5432,
  database: process.env.TYPEORM_DATABASE || 'pruebas',
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'postgres',
  logging: Boolean(process.env.TYPEORM_LOGGING) || true,
  entities: ['dist/src/domain/**/*.entity.js'],
  migrations: ['./src/config/database/migrations/*.{ts,js}'],
  migrationsTableName: 'migrations'
};
