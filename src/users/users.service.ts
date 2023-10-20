import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  createUser(createUserDto: CreateUserDto) {
    const createdUser = this.userRepository.create(createUserDto);
    return createdUser;
  }

  findAllUsers(): Promise<User[]> {
    const findedUsers = this.userRepository.findMany();
    return findedUsers;
  }

  findOneUser(id: string) {
    const findedUser = this.userRepository.findOne(id);
    return findedUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userRepository.update(id, updateUserDto);
    return updatedUser;
  }

  deleteUser(id: string) {
    const deletedUser = this.userRepository.doSoftDelete(id);
    return deletedUser;
  }
}
