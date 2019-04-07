import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../core/user-service/user';

@Component({
  selector: 'od-question-start',
  templateUrl: './question-start.component.html',
  styleUrls: ['./question-start.component.scss']
})
export class QuestionStartComponent implements OnInit {
  @Output() user: EventEmitter<User> = new EventEmitter();

  public currentUser: User = new User();

  constructor() { }

  ngOnInit() {
  }

  public isDisable() {
    return !this.currentUser.surname || !this.currentUser.name || !this.currentUser.middleName;
  }

  public startTest() {
    this.user.emit(this.currentUser);
  }
}
