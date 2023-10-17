import { registerAs } from '@nestjs/config';

export enum APP_ENV {
  NODE_ENV = 'app.nodeEnv',
  NAME = 'app.name',
  FRONTEND_DOMAIN = 'app.frontendDomain',
  BACKEND_DOMAIN = 'app.backendDomain',
  PORT = 'app.port',
  API_PREFIX = 'app.apiPrefix',
}

export default registerAs('app', () => ({
  // nodeEnv: process.env.NODE_ENV,
  // name: process.env.APP_NAME,
  // frontendDomain: process.env.FRONTEND_DOMAIN,
  // backendDomain: process.env.BACKEND_DOMAIN,
  // port: +process.env.APP_PORT || 3000,
  // apiPrefix: process.env.API_PREFIX || 'api/v',
}));
