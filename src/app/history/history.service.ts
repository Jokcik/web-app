import {Materials} from '../news/shared/materials';
import {ODResourceCrud} from '../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';
import {IResourceMethod, IResourceMethodStrict, ResourceAction, ResourceHandler, ResourceParams} from '@ngx-resource/core';
import {environment} from '../../environments/environment';

@Injectable()
@ResourceParams({pathPrefix: 'news'})
export class HistoryService extends ODResourceCrud<void, Materials, Materials> {
  constructor(restHandler: ResourceHandler, private sanitizer: DomSanitizer) {
    super(restHandler);
  }

  @ResourceAction({expectJsonArray: true})
  queryMainpage: IResourceMethod<{type?: number, url?: string}, Materials[]>;

  public querySafeHtml(value: {type?: number, url?: string}): Promise<Materials[]> {
    return this.queryMainpage(value).then(array => {
      array.forEach((value, index) => {
        if (typeof value.description.description == 'object') return;
        array[index].description.description = this.sanitizer.bypassSecurityTrustHtml(value.description.description);
        array[index].description.short_description = this.sanitizer.bypassSecurityTrustHtml(<string>value.description.short_description);
        array[index].title = this.sanitizer.bypassSecurityTrustHtml(<string>value.title);
      });

      return array;
    });
  }

}
