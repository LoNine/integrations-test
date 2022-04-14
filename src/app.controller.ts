import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/employment')
  async getEmployment(@Query() query: { employmentId: string }) {
    return this.appService.getEmployment(query.employmentId);
  }
}
