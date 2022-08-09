import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  SetMetadata,
  UseGuards, UseInterceptors
} from '@nestjs/common';
import { RolesGuard } from '../../roles/helpers/roles.guard';
import { ParseHeavyProcess } from '../customDecorator/parse-heavy-user';
import { CreateUserDto } from '../dto/create-user.dto';
import { HeavyUserDto } from '../dto/heavy-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['admin'])
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/heavy-process')
  async heavyProcess(@ParseHeavyProcess() heavyProcessData: HeavyUserDto) {
    console.log(heavyProcessData);
    return heavyProcessData;
  }

  @Get()
  @UseInterceptors(LoggingInterceptor)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
