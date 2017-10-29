import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public register: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.register = params['action'] == 'register');
  }

}
