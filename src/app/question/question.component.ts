import { Component, OnInit } from '@angular/core';
import {User} from '../core/user-service/user';
import {Question} from './shared/question';
import {questionData} from './shared/question.data';
import {ContactsService} from '../contacts/contacts.service';
import {Mail} from '../contacts/mail';

@Component({
  selector: 'od-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public step;

  public user: User;
  public data: Question[];
  public answers: number[];

  public stepKey = 'question-step';
  public userKey = 'question-user';
  public dataKey = 'question-data';
  public answersKey = 'question-answers';


  constructor(private mailService: ContactsService) {
  }

  ngOnInit() {
    const step = localStorage.getItem(this.stepKey);
    const user = localStorage.getItem(this.userKey);
    const answers = localStorage.getItem(this.answersKey);

    this.data = questionData;
    this.step = step ? +step : 1;
    this.user = user ? JSON.parse(user) : null;
    this.answers = answers ? JSON.parse(answers) : null;
  }

  public setUserQuestion(user: User) {
    this.user = user;
    this.step = 2;

    localStorage.setItem(this.stepKey, this.step);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  public clear() {
    if (window.prompt('Введите код доступа') !== '1234') { return; }

    localStorage.removeItem(this.stepKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.dataKey);

    this.ngOnInit()
  }

  public setAnswers(answers: number[]) {
    this.answers = answers;
    this.step = 3;

    this.mailService.sendMail(this.getMail());

    localStorage.setItem(this.stepKey, this.step);
    localStorage.setItem(this.answersKey, JSON.stringify(this.answers));
  }

  public getMail() {
    const { right, wrong } = this.format();

    let result = this.answers.map((answer, idx) => {
      let valid = answer === this.data[idx].results[0];

      return `<li>Ответ: ${answer}; <span style="color: ${valid ? 'green' : 'red'}">${ valid ? 'Верно' : 'Неверно' }</span></li>`
    });

    const mail = new Mail();
    mail.name = `'Результаты тестирования'`;
    mail.subject = `${right > 10 ? 'Зачтено' : 'Незачтено'}. Результаты от ${this.user.surname} ${this.user.name} ${this.user.middleName}`;
    mail.text = `
    <p>Правильных ответов: ${right}</p>
    <p>Неправильных ответов: ${wrong}</p>
    <p>Ответы: </p>

    <ol>
        ${result.join('')}
    </ol>
`

    return mail;
  }

  private format() {
    let right = 0;
    for (let i = 0; i < this.data.length; ++i) {
      right += this.data[i].results[0] == this.answers[i] ? 1 : 0;
    }

    let wrong = this.data.length - right;

    return { right, wrong };
  }
}
