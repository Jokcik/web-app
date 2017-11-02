import {ODResource} from './od-resource';
import {ResourceAction, ResourceMethod, ResourceMethodStrict} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

export class ODResourceCrud<TQuery, TShort, TFull> extends ODResource {
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
    path: '/{!id}'
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
