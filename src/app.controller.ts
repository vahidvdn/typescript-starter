import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TestDto } from './test.dto';
import { AppService } from './app.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({ type: TestDto })
  @Post()
  getHello(@Body() body: TestDto): string {
    console.log('HttpExceptionFilter does not log.');
    throw new Error('Index Out of Bounds');
    // throw new HttpException('500 errrrr', HttpStatus.INTERNAL_SERVER_ERROR);
    // return this.appService.getHello();
  }
}
