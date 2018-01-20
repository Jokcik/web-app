import {ODResourceCrud} from '../core/od-resource-crud';
import {Children, Instruments, Specialization} from '../admin/edit/shared/children';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';

export interface IQueryParams {
  school_id?: string;
  specialization_id?: string;
  long?: boolean;
}

@Injectable()
@ResourceParams({pathPrefix: 'children'})
export class ChildrenPageService extends ODResourceCrud<IQueryParams, Children, Children> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/specializations', isArray: true})
  querySpecializations: ResourceMethod<void, Specialization[]>;

  @ResourceAction({path: '/instruments', isArray: true})
  queryInstruments: ResourceMethod<IQueryParams, Instruments[]>;
}
