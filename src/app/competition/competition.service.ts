import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {ODResourceCrud} from '../core/od-resource-crud';
import {IQueryChildrenParams} from '../children-page/children-page.service';
import {Competition} from '../admin/edit/shared/competition';
import {CompetitionLevel} from '../admin/edit/shared/competition-level';
import {CompetitionPlace} from '../admin/edit/shared/competition-place';
import {Http} from '@angular/http';

@Injectable()
@ResourceParams({pathPrefix: 'competitions'})
export class CompetitionService extends ODResourceCrud<void, Competition, Competition> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/levels', isArray: true})
  queryLevels: ResourceMethod<void, CompetitionLevel[]>;

  @ResourceAction({path: '/places', isArray: true})
  queryPlaces: ResourceMethod<IQueryChildrenParams, CompetitionPlace[]>;
}
