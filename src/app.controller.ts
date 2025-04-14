import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService:ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getConfig(): string {
    const dbHost = this.configService.get('DB_HOST');
    const dbPort = this.configService.get('DB_PORT');
    return `Database Host: ${dbHost}, Database Port: ${dbPort}`;
  }
}
