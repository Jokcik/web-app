import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../../../core/od-resource-crud';
import {ResourceParams} from 'ngx-resource';
import {Region} from '../shared/region';
import {Http} from '@angular/http';

@Injectable()
@ResourceParams({pathPrefix: 'region'})
export class RegionService extends ODResourceCrud<void, Region, Region> {
  constructor(http: Http) {
    super(http);
  }
}
