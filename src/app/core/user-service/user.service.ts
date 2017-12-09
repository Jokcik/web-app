import {User} from './user';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService {
  public user: User;
  public onLogin = new Subject<User>();
  public errorAuth: boolean = false;

  public setUser(user: User) {
    this.errorAuth = false;
    this.user = user;
    this.onLogin.next(user);
  }

  public noAuthUser(err: number) {
    this.errorAuth = true;
    this.onLogin.error(err);
  }

  public getUser(): Observable<User> {
    if (this.errorAuth) {
      return Observable.of(this.user);
    }
    return this.user ? Observable.of(this.user) : this.onLogin.pipe(catchError(error => Observable.of(null)))
  }

  public logout() {
    delete this.user;
  }

}
