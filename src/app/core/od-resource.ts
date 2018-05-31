import {catchError, map} from 'rxjs/operators';
import {Resource, ResourceActionBase, ResourceParams} from 'ngx-resource';
import {environment} from '../../environments/environment';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {ServiceLocator} from './service-locator';

@Injectable()
@ResourceParams({url: environment.host})
export class ODResource extends Resource {
  public platformId = ServiceLocator.injector.get(PLATFORM_ID);

  constructor(http: Http) {
    super(http);
  }

  protected $requestInterceptor(req: Request, methodOptions?: ResourceActionBase): Request {
    if (!isPlatformBrowser(this.platformId)) {
      this.$responseInterceptor(this.http.get(req.url), req, methodOptions);
      return req;
    }

    if (localStorage.getItem('access_token')) {
      req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    }
    return super.$requestInterceptor(req, methodOptions);
  }


  protected $responseInterceptor(observable: Observable<any>, req: Request, methodOptions?: ResourceActionBase): Observable<any> {
    const obser = observable.pipe(map(value => {
      const val = value.json();
      if (val.statusCode >= 400) { throw new Error(val.message); }
      return value;
    })).pipe(catchError(err => {throw new Error(err.message); }));

    return super.$responseInterceptor(obser, req, methodOptions);
  }
}
