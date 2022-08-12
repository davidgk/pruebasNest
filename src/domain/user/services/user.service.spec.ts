import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { getRepository } from 'typeorm';
import {
  getTestConnection,
  testTypeOrmAsyncConfig
} from '../../../../test/testDatabase';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserModule } from '../user.module';
import { UserService } from './user.service';

async function configureConnectionAndModuleServiceTest(
  connection,
  moduleRef: TestingModule
) {
  connection = await getTestConnection();
  const repository = getRepository('User', 'testConnectionName');
  const repositoryToken = getRepositoryToken(User);
  moduleRef = await Test.createTestingModule({
    imports: [TypeOrmModule.forRootAsync(testTypeOrmAsyncConfig), UserModule],
    providers: [
      UserService,
      {
        provide: repositoryToken,
        useValue: repository
      }
    ]
  }).compile();
  return { connection, moduleRef };
}

describe('userService', () => {
  let userService: UserService;
  let moduleRef: TestingModule;
  let connection;

  beforeEach(async () => {
    const __ret = await configureConnectionAndModuleServiceTest(
      connection,
      moduleRef
    );
    connection = __ret.connection;
    moduleRef = __ret.moduleRef;
    userService = moduleRef.get(UserService);
  });

  afterEach(async () => {
    await connection.close();
  });

  it('can create a user', async () => {
    const aUserDto: CreateUserDto = {
      firstName: 'aName',
      lastName: 'aLastName',
      password: 'aPassword',
      email: 'pepe@pepe.com'
    };
    try {
      const user = await userService.create(aUserDto);
      expect(user.id).not.toBeNull();
    } catch (e) {
      console.log(e);
    }
  });
});
