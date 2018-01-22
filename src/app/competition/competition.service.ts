import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../core/od-resource-crud';
import {IQueryParams} from '../children-page/children-page.service';
import {Competition} from '../admin/edit/shared/competition';
import {CompetitionLevel} from '../admin/edit/shared/competition-level';
import {CompetitionPlace} from '../admin/edit/shared/competition-place';
import {Http} from '@angular/http';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

@Injectable()
@ResourceParams({pathPrefix: 'competitions'})
export class CompetitionService extends ODResourceCrud<void, Competition, Competition> {
  @ResourceAction({path: '/levels', isArray: true})
  queryLevels: IResourceMethod<void, CompetitionLevel[]>;

  @ResourceAction({path: '/places', isArray: true})
  queryPlaces: IResourceMethod<IQueryParams, CompetitionPlace[]>;
}
