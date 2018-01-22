import {Injectable} from '@angular/core';
import {IResourceAction, Resource, ResourceParams} from '@ngx-resource/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ODResource extends Resource {

  $getUrl(actionOptions?: IResourceAction): string | Promise<string> {
    return environment.host + super.$getUrl(actionOptions);
  }

// protected $requestInterceptor(req: Request, methodOptions?: ResourceActionBase): Request {
  //   if (localStorage.getItem('access_token')) {
  //     req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
  //   }
  //   return super.$requestInterceptor(req, methodOptions);
  // }


  // protected $responseInterceptor(observable: Observable<any>, req: Request, methodOptions?: ResourceActionBase): Observable<any> {
  //   let obser = observable.map(value => {
  //     let val = value.json();
  //     if (val.statusCode >= 400) throw new Error(value.json().message);
  //     return value;
  //   });
  //   return super.$responseInterceptor(obser, req, methodOptions);
  // }
}
