import {User} from './user';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService {
  public user: User;
  public isCheckAuth: boolean = false;
  public onLogin = new Subject<User>();
  public errorAuth: boolean = false;

  public setUser(user: User) {
    this.isCheckAuth = true;
    this.errorAuth = false;
    this.user = user;
    this.onLogin.next(user);
  }

  public noAuthUser(err: number) {
    this.isCheckAuth = true;
    this.errorAuth = true;
    this.onLogin.error(err);
  }

  public getUser(): Observable<User> {
    if (this.errorAuth) {
      return of(this.user);
    }
    return this.user ? of(this.user) : this.onLogin.pipe(catchError(error => of(null)))
  }

  public logout() {
    delete this.user;
  }

}
