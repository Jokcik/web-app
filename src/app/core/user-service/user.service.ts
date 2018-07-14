import {User} from './user';
import {Subject, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService {
  public user: User;
  public isCheckAuth = false;
  public onLogin = new Subject<User>();
  public errorAuth = false;

  public setUser(user: User) {
    this.isCheckAuth = true;
    this.errorAuth = false;
    this.user = user ? Object.assign(new User(), user) : null;
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
    return this.user ? of(this.user) : this.onLogin.pipe(catchError(error => of(null)));
  }

  public logout() {
    delete this.user;
  }

}
