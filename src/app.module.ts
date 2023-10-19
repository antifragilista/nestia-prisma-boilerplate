import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigsModule } from "./configs/configs.module";
import { PrismaModule } from "./database/prisma/prisma.module";

@Module({
  imports: [UsersModule, ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
