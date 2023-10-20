import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from "../database/prisma/prisma.module";
import { UsersRepository } from "./users.repository";
import { PrismaService } from "../database/prisma/prisma.service";

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
