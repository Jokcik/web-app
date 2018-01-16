import {Controller, Post, Request, Response} from '@nestjs/common';
import {UploadsService} from './uploads.service';


@Controller('upload')
export class UploadsController {
  constructor(private uploadsService: UploadsService) {
  }

  @Post()
  public async uploadFile(@Request() req, @Response() res) {
    // return await this.uploadsService.uploadFile(req.protocol + '://' + req.get('host'), req.files, req.fields);
    let a = await this.uploadsService.uploadFile('https://rumc31.ru', req.files, req.fields);
    console.log(a);
    return a;
  }
}
