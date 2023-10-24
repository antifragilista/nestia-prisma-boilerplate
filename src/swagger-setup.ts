// swagger-setup.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const docs = require('../../swagger/swagger.json');
  docs.servers = [{ url: 'http://localhost:3000/docs' }];
  SwaggerModule.setup('swagger', app, docs);
}
