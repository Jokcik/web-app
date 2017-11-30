import { Component, OnInit } from '@angular/core';
import {Schools} from '../shared/school';
import {DshiEditService} from './dshi-edit.service';

@Component({
  selector: 'od-dshi-edit',
  templateUrl: './dshi-edit.component.html'
})
export class DshiEditComponent implements OnInit {
  public schools: Schools[] = [];
  public currentIndex: number = -1;

  constructor(private schoolService: DshiEditService) { }

  ngOnInit() {
    this.schools = this.schoolService.query();
  }

}
