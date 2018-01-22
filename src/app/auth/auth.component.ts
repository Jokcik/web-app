import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Roles, User} from '../core/user-service/user';
import {ProfileService} from '../profile/profile.service';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public register: boolean = false;
  public user: User = new User();
  public password: string;
  public roles: typeof Roles = Roles;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private userService: UserService,
              private router: Router) {
  }

  public ngOnInit() {
    this.route.params.subscribe(params => this.register = params['action'] == 'register');
  }

  public loginUser() {
    this.profileService.login({login: this.user.nickname, password: this.password}).then(user => {
      this.userService.setUser(user);
      localStorage.setItem('access_token', user.access_token);
      this.router.navigate(['/']);
    });
  }

  public registerUser() {
    let login = Object.assign(this.user, {password: this.password});
    this.profileService.register(this.user).then(data => {
      this.userService.setUser(this.user);
      localStorage.setItem('access_token', data.access_token);
      this.router.navigate(['/']);
    });
  }
}
