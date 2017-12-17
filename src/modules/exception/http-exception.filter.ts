import {ExceptionFilter} from '@nestjs/common/interfaces/exceptions';
import {Catch} from '@nestjs/common';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, response) {
    const status = 500;

    response.status(200).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
