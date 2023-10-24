import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { TypedBody, TypedParam, TypedRoute } from "@nestia/core";
import { tags } from "typia";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TypedRoute.Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @TypedRoute.Get()
  async findAll() {
    return await this.usersService.findAllUsers();
  }

  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string & tags.Format<'uuid'>) {
    return await this.usersService.findOneUser(id);
  }

  @TypedRoute.Patch(':id')
  async update(@TypedParam('id') id: string & tags.Format<'uuid'>,
         @TypedBody() updateUserDto: UpdateUserDto) {
    const result: User = await this.usersService.updateUser(id, updateUserDto);
    return result;
  }

  @TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: string & tags.Format<'uuid'>) {
    return await this.usersService.deleteUser(id);
  }
}
