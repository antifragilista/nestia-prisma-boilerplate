import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';
import databaseConfig from './database.config';
import authConfig from './auth.config';
import logConfig from './log.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `${__dirname}/env/.${process.env.NODE_ENV}.env`,
      load: [appConfig, databaseConfig, authConfig, logConfig],
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigsModule {}
