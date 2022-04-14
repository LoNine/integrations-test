import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/employments')
  async getEmployment(@Query() query: { id: string }) {
    return this.appService.getEmployment(query.id);
  }
}
