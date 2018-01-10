import {Module} from '@nestjs/common';
import {MailController} from './mail.controller';
import {MailService} from './mail.service';

@Module({
  controllers: [MailController],
  components: [MailService],
})
export class MailModule {
}
