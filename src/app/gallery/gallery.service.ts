import {ODResourceCrud} from '../core/od-resource-crud';
import {Gallery} from './shared/gallery';
import {Http} from '@angular/http';
import {ResourceParams} from 'ngx-resource';
import {Injectable} from '@angular/core';

@Injectable()
@ResourceParams({pathPrefix: 'galleries'})
export class GalleryService extends ODResourceCrud<void, Gallery, Gallery> {
  constructor(http: Http) {
    super(http);
  }
}
