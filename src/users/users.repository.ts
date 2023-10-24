import { Injectable } from "@nestjs/common";
import { PrismaService } from '../database/prisma/prisma.service';
import { User } from "./entities/user.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(inputData: Prisma.UserCreateInput): Promise<User> {
    return await this.prismaService.user.create({
      data: inputData,
    });
  }

  async findMany(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, inputData: Prisma.UserUpdateInput): Promise<User> {
    return await this.prismaService.user.update({
      where: {
        id: id,
      },
      data: inputData,
    });
  }

  async doSoftDelete(id: string): Promise<User> {
    return await this.prismaService.user.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
