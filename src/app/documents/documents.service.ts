import {ODResourceCrud} from '../core/od-resource-crud';
import {Http, RequestMethod} from '@angular/http';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Injectable} from '@angular/core';
import {Documents} from './shared/documents';

export interface IQueryInput {
  _id?: string;

  title?: string;
  url?: string;
  itemId?: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'documents'})
export class DocumentsService extends ODResourceCrud<void, Documents, Documents> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/{!_id}/item', method: RequestMethod.Post})
  saveItem: ResourceMethod<IQueryInput, any>;

  @ResourceAction({path: '/{!_id}/item', method: RequestMethod.Delete})
  deleteItem: ResourceMethod<IQueryInput, any>;

}
