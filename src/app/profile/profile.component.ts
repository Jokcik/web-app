import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';
import {UserService} from '../core/user-service/user.service';
import {User} from '../core/user-service/user';

@Component({
  selector: 'od-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.profileService.getUser().$observable.subscribe(
      user => this.userService.setUser(user),
      error => this.userService.noAuthUser(error)
    );
  }

  public logout() {
    localStorage.setItem('access_token', '');
    this.userService.logout();
  }
}
