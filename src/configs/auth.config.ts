import { registerAs } from '@nestjs/config';

export enum AUTH_ENV {
  SECRET = 'auth.secret',
  EXPIRES = 'auth.expires',
  BASE_URL = 'auth.baseUrl',
}

export default registerAs('auth', () => ({
  // secret: process.env.AUTH_JWT_SECRET,
  // expires: process.env.AUTH_JWT_TOKEN_EXPIRES_IN,
  // /** Todo: create refresh secret & expires */
  // hashRounds: process.env.AUTH_HASH_ROUNDS,
  // baseUrl: process.env.AUTH_SERVER_BASE_URL,
}));
