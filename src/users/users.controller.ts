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
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.usersService.findAllUsers();
  }

  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string & tags.Format<'uuid'>) {
    return this.usersService.findOneUser(id);
  }
  /**
   * Would not be shown.
   *
   * @internal
   */
  @TypedRoute.Patch(':id')
  update(@TypedParam('id') id: string & tags.Format<'uuid'>,
         @TypedBody() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }
  /**
   *
   * @param section Section code
   * @param input Content to store
   * @returns Newly archived article

   * @summary deprecated API
   */
  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string & tags.Format<'uuid'>) {
    return this.usersService.deleteUser(id);
  }
}
