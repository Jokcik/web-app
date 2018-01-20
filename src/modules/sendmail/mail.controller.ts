import {Body, Controller, Post, Request} from '@nestjs/common';
import {MailService} from './mail.service';
import {IMail} from './mail.interface';


@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {
  }

  @Post()
  public async sendMail(@Request() req, @Body() body: IMail) {
    return await this.mailService.sendMail(body);
  }
}
