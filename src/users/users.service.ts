import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import databaseConfig from '../configs/database.config';
import { ConfigType } from "@nestjs/config";
import { PrismaService } from "../database/prisma/prisma.service";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser: User = await this.prismaService.user.create({
        data: createUserDto
    });

    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let userToUpdate: User;
    try {
      console.log(`id : ${id}`);
      userToUpdate = await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      });
      console.log(`userToUpdate : ${userToUpdate}`);
    } catch (error) {
      // 예외 처리: 없는 사용자 ID로 인한 Prisma 오류 등
      throw new NotFoundException(`Error updating user #${id}: ${error.message}`);
    }

    return userToUpdate;
  }

  async remove(id: string) {
    let deletedUser: User;
    try {
      deletedUser = await this.prismaService.user.delete({
        where: { id },
      });
    } catch (error) {
      // 예외 처리: 없는 사용자 ID로 인한 Prisma 오류 등
      throw new NotFoundException(`Error deleting user #${id}: ${error.message}`);
    }

    return deletedUser;
  }
}
