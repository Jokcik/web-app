import {Injectable} from '@angular/core';
import {ResourceParams} from 'ngx-resource';
import {ODResourceCrud} from '../core/od-resource-crud';
import {IQueryParams} from '../bank-data-od/children.service';
import {Competition} from '../admin/edit/shared/competition';
import {Http} from '@angular/http';

@Injectable()
@ResourceParams({pathPrefix: 'competitions'})
export class CompetitionService extends ODResourceCrud<void, Competition, Competition> {
  constructor(http: Http) {
    super(http);
  }
}
