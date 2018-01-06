import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';
import {UserService} from '../core/user-service/user.service';

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
      user => user ? this.userService.setUser(user) : this.userService.noAuthUser(401),
      error => this.userService.noAuthUser(error)
    );
  }

  public logout() {
    localStorage.removeItem('access_token');
    this.userService.logout();
  }
}
