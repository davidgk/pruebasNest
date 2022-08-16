import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Base } from '../../base.entity';
import * as bcrypt from 'bcrypt';

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

  @Column({ nullable: false })
  password!: string;

  @Column({ default: false })
  isAdmin: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(
      this.password,
      Number(process.env.HASH_SALT)
    );
  }
}
