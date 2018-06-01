import {ODResource} from './od-resource';
import {ResourceAction, ResourceMethod, ResourceMethodStrict} from 'ngx-resource';
import {Http, RequestMethod} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ODResourceCrud<TQuery, TShort, TFull> extends ODResource {

  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<TQuery, TShort[]>;

  @ResourceAction({
    path: '/{!_id}'
  })
  get: ResourceMethod<{_id: any}, TFull>;

  @ResourceAction({
    path: '/{!_id}'
  })
  get2: ResourceMethodStrict<TFull, {_id: any}, TFull>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<TFull, TFull>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!_id}'
  })
  update: ResourceMethod<TFull, TFull>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!_id}'
  })
  remove: ResourceMethod<{_id: any}, any>;

  // Alias to save
  create(data: TFull, callback?: (res: TFull) => any): TFull {
    return this.save(data, callback);
  }
}
