import {Component} from '@nestjs/common';
import {IMail} from './mail.interface';
import * as nodemailer from 'nodemailer';

@Component()
export class MailService {
  public async sendMail(body: IMail) {
    const transporter = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: 'cherenkova@rumc31.ru',
        pass: '312510'
      }
    });

    const mailOptions = {
      // from: `${body.name} <${body.email}>`,
      from: `${body.name} <cherenkova@rumc31.ru>`,
      to: 'cherenkova@rumc31.ru',
      subject: `${body.subject}`,
      html: `Сообщение от ${body.email}:\n${body.text}`
    };

    return await new Promise(((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (!err) {
          resolve({success: true, data: info});
        } else {
          reject({success: false, data: err});
        }
      });
    }));
  }
}

