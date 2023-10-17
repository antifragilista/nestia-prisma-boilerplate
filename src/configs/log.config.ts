import { registerAs } from '@nestjs/config';

export enum LOG_ENV {
  DIR_NAME = 'log.dirName',
}

export default registerAs('log', () => ({
  // dirName: process.env.LOG_DIR_NAME,
}));
