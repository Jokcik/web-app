import {Injectable} from '@angular/core';
import {ODResourceCrud} from '../../../core/od-resource-crud';
import {Region} from '../shared/region';
import {Http} from '@angular/http';
import {ResourceParams} from '@ngx-resource/core';

@Injectable()
@ResourceParams({pathPrefix: 'region'})
export class RegionService extends ODResourceCrud<void, Region, Region>{
}
