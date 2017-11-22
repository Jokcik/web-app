import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../../../core/od-resource-crud';
import {ResourceParams} from 'ngx-resource';
import {Region} from '../shared/region';

@Injectable()
@ResourceParams({pathPrefix: 'region'})
export class RegionService extends ODResourceCrud<void, Region, Region>{
}
