import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../core/od-resource-crud';
import {ResourceParams} from 'ngx-resource';
import {Http} from '@angular/http';
import {Schools} from '../admin/edit/shared/school';

export interface IQueryParams {
  region_id: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'schools-region'})
export class SchoolsService extends ODResourceCrud<IQueryParams, Schools, Schools>{
  constructor(http: Http) {
    super(http);
  }
}
