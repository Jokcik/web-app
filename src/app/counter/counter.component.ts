import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {UserService} from '../core/user-service/user.service';
import {isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-counter',
  template: ``,
})
export class CWCounter implements OnInit {
  constructor(private userService: UserService,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) { return; }
    setInterval(() => {
      this.send();
    }, 60000);

    this.userService.getUser().subscribe(user => {
      this.send();
    });
  }

  send() {
    let url = window.location.pathname;
    let user = this.userService.user ? this.userService.user._id : 0;

    let img = new Image();
    img.src = '/counter.gif?p=' + url + '&u=' + user + '&d=' + Date.now();
  }

}
