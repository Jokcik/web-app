import { Component, OnInit } from '@angular/core';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-children-page',
  templateUrl: './children-page.component.html'
})
export class ChildrenPageComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
