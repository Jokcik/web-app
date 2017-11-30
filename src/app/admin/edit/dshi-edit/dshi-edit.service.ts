import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../../../core/od-resource-crud';
import {ResourceParams} from 'ngx-resource';
import {Http} from '@angular/http';
import {Schools} from '../shared/school';

@Injectable()
@ResourceParams({pathPrefix: 'schools-region'})
export class DshiEditService extends ODResourceCrud<void, Schools, Schools>{
  constructor(http: Http) {
    super(http);
  }
}
