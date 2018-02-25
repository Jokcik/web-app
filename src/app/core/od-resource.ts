import {Resource, ResourceActionBase, ResourceParams} from 'ngx-resource';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {_throw} from 'rxjs/observable/throw';

@Injectable()
@ResourceParams({url: environment.host})
export class ODResource extends Resource {
  constructor(http: Http) {
    super(http);
  }

  protected $requestInterceptor(req: Request, methodOptions?: ResourceActionBase): Request {
    if (localStorage.getItem('access_token')) {
      req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    }
    return super.$requestInterceptor(req, methodOptions);
  }


  protected $responseInterceptor(observable: Observable<any>, req: Request, methodOptions?: ResourceActionBase): Observable<any> {
    const obser = observable.map(value => {
      const val = value.json();
      if (val.statusCode >= 400) { throw new Error(value.json().message); }
      return value;
    });
    return super.$responseInterceptor(obser, req, methodOptions);
  }
}
