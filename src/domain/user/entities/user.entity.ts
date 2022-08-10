import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../../base.entity';

@Entity('users')
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  @Index({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;
}
