// swagger-setup.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const docs = require('../../swagger/swagger.json');
  SwaggerModule.setup('docs', app, docs);
}
