import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Roles, User} from '../core/user-service/user';
import {ProfileService} from '../profile/profile.service';
import {UserService} from '../core/user-service/user.service';
import {SchoolsService} from '../schools/schools.service';
import {Schools} from '../admin/edit/shared/school';

@Component({
  selector: 'od-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public register = false;
  public user: User = new User();
  public password: string;
  public roles: typeof Roles = Roles;

  public schools: Schools[] = [];
  public selectedSchoolId: string;

  public typeAuth: number = Roles.KOORDINATOR;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private userService: UserService,
              private schoolsService: SchoolsService,
              private router: Router) {
  }

  public ngOnInit() {
    this.schools = this.schoolsService.query();
    this.route.params.subscribe(params => this.register = params['action'] === 'register');
  }

  public loginUser() {
    this.profileService.login({login: this.user.nickname, password: this.password}).$observable.subscribe(user => {
      this.userService.setUser(user);
      localStorage.setItem('access_token', user.access_token);
      this.router.navigate(['/']);
    });
  }

  public registerUser() {
    const login = Object.assign({}, this.user, {password: this.password, schools: this.selectedSchoolId, role: this.typeAuth});
    this.profileService.register(login).$observable.subscribe(data => {
      window.alert(`Вы успешно зарегистрировали пользователя ${login.surname + ' ' + login.name + ' ' + login.middleName}.
      \nлогин: ${login.nickname}\nпароль: ${login.password}`);
    });
  }
}
