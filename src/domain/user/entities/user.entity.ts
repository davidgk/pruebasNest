import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../../base.entity';

@Entity('users')
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  username!: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ select: false })
  password!: string;

  @Column({ default: false })
  isAdmin: boolean;
}
