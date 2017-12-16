import {MiddlewaresConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UploadsController} from './uploads.controller';
import {UploadsService} from './uploads.service';
import * as formidable from 'express-formidable';

@Module({
  controllers: [UploadsController],
  components: [UploadsService],
})
export class UploadsModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): MiddlewaresConsumer | void {
    return consumer.apply(formidable()).forRoutes({ path: '/upload', method: RequestMethod.POST });
  }
}