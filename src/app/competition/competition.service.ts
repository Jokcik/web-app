import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {ODResourceCrud} from '../core/od-resource-crud';
import {IQueryParams} from '../bank-data-od/children.service';
import {Competition} from '../admin/edit/shared/competition';
import {Http} from '@angular/http';
import {Instruments, Specialization} from '../admin/edit/shared/children';

@Injectable()
@ResourceParams({pathPrefix: 'competitions'})
export class CompetitionService extends ODResourceCrud<void, Competition, Competition> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/specializations', isArray: true})
  querySpecializations: ResourceMethod<void, Specialization[]>;

  @ResourceAction({path: '/instruments', isArray: true})
  queryInstruments: ResourceMethod<IQueryParams, Instruments[]>;
}
