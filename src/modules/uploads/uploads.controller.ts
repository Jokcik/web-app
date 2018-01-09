import {Controller, Post, Request} from '@nestjs/common';
import {UploadsService} from './uploads.service';


@Controller('upload')
export class UploadsController {
  constructor(private uploadsService: UploadsService) {
  }

  @Post()
  public async uploadFile(@Request() req) {
    // return await this.uploadsService.uploadFile(req.protocol + '://' + req.get('host'), req.files, req.fields);
    return await this.uploadsService.uploadFile('https://rumc31.ru', req.files, req.fields);
  }
}
