import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../core/od-resource-crud';
import {Schools} from '../admin/edit/shared/school';
import {ResourceParams} from '@ngx-resource/core';

export interface IQueryParams {
  region_id?: string;
  type?: number;
}

@Injectable()
@ResourceParams({pathPrefix: 'schools-region'})
export class SchoolsService extends ODResourceCrud<IQueryParams, Schools, Schools>{
}
