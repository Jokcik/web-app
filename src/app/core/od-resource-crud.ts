import {ODResource} from './od-resource';
import {Http, RequestMethod} from '@angular/http';
import {Injectable} from '@angular/core';
import {IResourceMethod, IResourceMethodStrict, ResourceAction, ResourceRequestMethod} from '@ngx-resource/core';

@Injectable()
export class ODResourceCrud<TQuery, TShort, TFull> extends ODResource {

  @ResourceAction({
    isArray: true
  })
  query: IResourceMethod<TQuery, TShort[]>;

  @ResourceAction({
    path: '/{!_id}'
  })
  get: IResourceMethod<{id: any}, TFull>;

  @ResourceAction({
    method: ResourceRequestMethod.Post
  })
  save: IResourceMethod<TFull, TFull>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!_id}'
  })
  update: IResourceMethod<TFull, TFull>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!_id}'
  })
  remove: IResourceMethod<{_id: any}, any>;

  // Alias to save
  create(data: TFull, callback?: (res: TFull) => any): Promise<TFull> {
    return this.save(data, callback);
  }
}
