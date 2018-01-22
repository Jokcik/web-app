import {ODResourceCrud} from '../core/od-resource-crud';
import {Children, Instruments, Specialization} from '../admin/edit/shared/children';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

export interface IQueryParams {
  school_id?: string;
  specialization_id?: string;
  long?: boolean;
}

@Injectable()
@ResourceParams({pathPrefix: 'children'})
export class ChildrenPageService extends ODResourceCrud<IQueryParams, Children, Children> {

  @ResourceAction({path: '/specializations', isArray: true})
  querySpecializations: IResourceMethod<void, Specialization[]>;

  @ResourceAction({path: '/instruments', isArray: true})
  queryInstruments: IResourceMethod<IQueryParams, Instruments[]>;
}
