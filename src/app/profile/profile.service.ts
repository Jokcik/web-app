import {ODResourceCrud} from '../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {Http, RequestMethod} from '@angular/http';
import {User} from '../core/user-service/user';
import {IResourceMethod, ResourceAction, ResourceParams, ResourceRequestMethod} from '@ngx-resource/core';

interface IQueryParam {

}

@Injectable()
@ResourceParams({pathPrefix: 'profiles'})
export class ProfileService extends ODResourceCrud<IQueryParam, User, User> {
  @ResourceAction({path: '/register', method: ResourceRequestMethod.Post})
  register: IResourceMethod<User, any>;

  @ResourceAction({method: ResourceRequestMethod.Post})
  login: IResourceMethod<{login: string, password: string}, any>;

  @ResourceAction()
  getUser: IResourceMethod<void, User>;

}
