import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser: User = await this.userRepository.create(createUserDto);
    return createdUser;
  }

  async findAllUsers(): Promise<User[]> {
    const findedUsers: User[] = await this.userRepository.findMany();
    return findedUsers;
  }

  async findOneUser(id: string): Promise<User | null> {
    const findedUser: User | null = await this.userRepository.findOne(id);
    return findedUser;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser: User = await this.userRepository.update(
      id,
      updateUserDto,
    );
    return updatedUser;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser: User = await this.userRepository.doSoftDelete(id);
    return deletedUser;
  }
}
