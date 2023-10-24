import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser: Promise<User> = this.userRepository.create(createUserDto);
    return createdUser;
  }

  findAllUsers(): Promise<User[]> {
    const findedUsers: Promise<User[]> = this.userRepository.findMany();
    return findedUsers;
  }

  findOneUser(id: string): Promise<User | null> {
    const findedUser: Promise<User | null> = this.userRepository.findOne(id);
    return findedUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser: Promise<User> = this.userRepository.update(id, updateUserDto);
    return updatedUser;
  }

  deleteUser(id: string): Promise<User> {
    const deletedUser: Promise<User> = this.userRepository.doSoftDelete(id);
    return deletedUser;
  }
}
