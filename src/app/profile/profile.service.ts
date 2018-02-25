import {ODResourceCrud} from '../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Http, RequestMethod} from '@angular/http';
import {User} from '../core/user-service/user';

interface IQueryParam {
  _id?: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'profiles'})
export class ProfileService extends ODResourceCrud<IQueryParam, User, User> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/register', method: RequestMethod.Post})
  register: ResourceMethod<User, any>;

  @ResourceAction({method: RequestMethod.Post})
  login: ResourceMethod<{login: string, password: string}, any>;

  @ResourceAction()
  getUser: ResourceMethod<void, User>;

}
