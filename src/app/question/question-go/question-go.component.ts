import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../core/user-service/user';
import {Question} from '../shared/question';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'od-question-go',
  templateUrl: './question-go.component.html',
  styleUrls: ['./question-go.component.scss']
})
export class QuestionGoComponent implements OnInit {
  @Input() user: User;
  @Input() data: Question[];

  @Output() answers: EventEmitter<number[]> = new EventEmitter();
  public formControls: FormControl[] = [];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formControls = this.data.map(() => new FormControl('', Validators.required));
    this.form = this.formBuilder.group({});
    for (let i = 0; i < this.formControls.length; ++i) {
      this.form.addControl('answer-' + (i + 1), this.formControls[i]);
    }
  }

  public exit() {
    const answers = this.formControls.map(control => control.value + 1);
    this.answers.emit(answers)
  }
}
