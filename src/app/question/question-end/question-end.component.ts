import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../shared/question';
import {User} from '../../core/user-service/user';

@Component({
  selector: 'od-question-end',
  templateUrl: './question-end.component.html',
  styleUrls: ['./question-end.component.scss']
})
export class QuestionEndComponent implements OnInit {
  @Input() user: User;
  @Input() data: Question[];
  @Input() answers: number[];

  public right: number;
  public wrong: number;

  constructor() { }

  ngOnInit() {
    let right = 0;
    for (let i = 0; i < this.data.length; ++i) {
      right += this.data[i].results[0] == this.answers[i] ? 1 : 0;
    }

    this.right = right;
    this.wrong = this.data.length - this.right;
  }

  get result() {
    return this.right > 10;
  }
}
