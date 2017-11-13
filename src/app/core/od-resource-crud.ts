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
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, TFull>;

  @ResourceAction({
    path: '/{!id}'
  })
  get2: ResourceMethodStrict<TFull, {id: any}, TFull>;

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
    path: '/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  // Alias to save
  create(data: TFull, callback?: (res: TFull) => any): TFull {
    return this.save(data, callback);
  }
}
