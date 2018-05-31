import {ODResourceCrud} from '../core/od-resource-crud';
import {Children, Instruments, Specialization} from '../admin/edit/shared/children';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Observable} from 'rxjs';

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

  @ResourceAction({path: '/rating', isArray: true})
  getChildrenWithRating: ResourceMethod<IQueryParams, Children[]>;

  private formatChildren(value: Children) {
    const children: any = Object.assign({}, value);
    children.schools = children.schools._id || children.schools;
    children.instruments = children.instruments._id || children.instruments;

    if (children.ssuzInfo.specialization) {
      children.ssuzInfo.specialization = children.ssuzInfo.specialization._id || children.ssuzInfo.specialization;
    }
    children.competitions = children.competitions.map(comp => {
      const competition = Object.assign({}, comp);
      competition.place = competition.place._id || competition.place;
      competition.level = competition.level._id || competition.level;
      competition.competition = competition.competition._id || competition.competition;
      competition.specialization = competition.specialization._id || competition.specialization;
      if (competition.teacher) {
        competition.teacher = competition.teacher._id || competition.teacher;
      }

      return competition;
    });

    return children;
  }

  public saveChildren(value: Children): Observable<Children> {
    return this.save(this.formatChildren(value)).$observable;
  }


  public updateChildren(value: Children): Observable<Children> {
    return this.update(this.formatChildren(value)).$observable;
  }
}
