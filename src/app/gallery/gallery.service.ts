import {ODResourceCrud} from '../core/od-resource-crud';
import {Gallery} from './shared/gallery';
import {Injectable} from '@angular/core';
import {ResourceParams} from '@ngx-resource/core';

@Injectable()
@ResourceParams({pathPrefix: 'galleries'})
export class GalleryService extends ODResourceCrud<void, Gallery, Gallery> {
}
