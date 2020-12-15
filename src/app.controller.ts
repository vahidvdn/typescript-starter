import { Controller, Post, Body } from '@nestjs/common';
import { TestDto } from './test.dto';
import { AppService } from './app.service';
import {
  ApiBody,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnprocessableEntityResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({ type: TestDto })
  @Post()
  getHello(@Body() body: TestDto): string {
    return this.appService.getHello();
  }
}
