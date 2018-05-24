import {Component} from '@nestjs/common';
import {CronJob} from 'cron';

@Component()
export class CronService {
  constructor() {
  }

  start10Min(func: Function, context?: any) {
    const cron = new CronJob("0 */10 * * * *", () => func(), null, true, 'Europe/Moscow', context);
    cron.start();
  }
}
