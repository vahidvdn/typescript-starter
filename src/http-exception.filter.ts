import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(InternalServerErrorException)
export class HttpExceptionFilter
  extends BaseExceptionFilter
  implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // if (status != 500) super.catch(exception, host);

    console.log('statu:');
    console.log(status);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      myMessage:
        'HttpExceptionFilter should work with InternalServerErrorException',
    });
  }
}
