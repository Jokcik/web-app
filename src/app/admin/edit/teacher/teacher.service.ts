import {ODResourceCrud} from '../../../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Teacher} from '../shared/teacher';

export interface IQueryParams {
  name?: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'teacher'})
export class TeacherService extends ODResourceCrud<IQueryParams, Teacher, Teacher> {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({path: '/search/{!name}', isArray: true})
  search: ResourceMethod<IQueryParams, Teacher[]>;
}
