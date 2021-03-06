
import {map} from 'rxjs/operators';
import {Materials} from '../news/shared/materials';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {ODResourceCrud} from '../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
@ResourceParams({pathPrefix: 'news'})
export class EventService extends ODResourceCrud<void, Materials, Materials> {
  constructor(http: Http, private sanitizer: DomSanitizer) {
    super(http);
  }

  @ResourceAction({isArray: true})
  queryMainpage: ResourceMethod<{type?: number, url?: string, page?: number, onPage?: number, unactual?: boolean}, Materials[]>;

  public querySafeHtml(value: {type?: number, url?: string, page?: number, onPage?: number}): Observable<Materials[]> {
    return this.queryMainpage(value).$observable.pipe(map(array => {
      array.forEach((val, index) => {
        if (typeof val.description.description === 'object') { return; }
        array[index].description.description = this.sanitizer.bypassSecurityTrustHtml(val.description.description);
        array[index].description.short_description = this.sanitizer.bypassSecurityTrustHtml(<string>val.description.short_description);
        array[index].title = this.sanitizer.bypassSecurityTrustHtml(<string>val.title);
      });

      return array;
    }));
  }

}
