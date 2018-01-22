import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ContactsService} from './contacts.service';
import {Mail} from './mail';

@Component({
  selector: 'od-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  public mail: Mail = new Mail();

  constructor(private mailService: ContactsService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public sendMessage() {
    this.mailService.sendMail(this.mail).then(() => this.snackBar.open('Сообщение отправлено', 'ОК', {duration: 2000}));
  }
}
