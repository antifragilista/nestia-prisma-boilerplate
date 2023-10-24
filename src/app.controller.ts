import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  getHello(): string {
    console.log(process.env.NODE_ENV);
    console.log(process.env.DATABASE_CONTAINER_NAME);
    console.log(process.env.DATABASE_URL);
    return 'OK';
  }
}
