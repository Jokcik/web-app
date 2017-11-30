import { Component, OnInit } from '@angular/core';
import {Schools} from '../shared/School';

@Component({
  selector: 'od-dshi-edit',
  templateUrl: './dshi-edit.component.html'
})
export class DshiEditComponent implements OnInit {
  public schools: Schools[] = [];
  public currentIndex: number = -1;

  constructor() { }

  ngOnInit() {
  }

}
