import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrentAdmin } from 'adminjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = await this.usersRepository.create(createUserDto);
    const userSaved = await userCreated.save();
    return userSaved;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async authenticate(email: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user || !user.isAdmin) return;
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return;
    return user as unknown as CurrentAdmin;
  }
}
