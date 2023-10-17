import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import databaseConfig from '../configs/database.config';
import { ConfigType } from "@nestjs/config";
import { PrismaService } from "../database/prisma/prisma.service";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  // @Inject(databaseConfig.KEY) private dbConfig: ConfigType<typeof databaseConfig>,
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto): string {
    return `This action create user`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
