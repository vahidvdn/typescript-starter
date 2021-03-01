import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
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
    // throw new Error('Index Out of Bounds');
    throw new HttpException('forbidden errrrr', HttpStatus.FORBIDDEN);
    // throw new InternalServerErrorException('500 errrrr');
    // return this.appService.getHello();
  }
}
