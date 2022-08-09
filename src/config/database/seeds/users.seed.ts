import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../../domain/user/entities/user.entity';

export default class implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(10);
  }Ø
}
