import {Description, Materials} from '../news/shared/materials';
import {MockDescription} from './mock';
import {ODResource} from '../core/od-resource';
import {ResourceParams} from 'ngx-resource';
import {ODResourceCrud} from '../core/od-resource-crud';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
@ResourceParams({pathPrefix: 'mainpage-news'})
export class MainpageService extends ODResourceCrud<void, Materials, Materials> {
  constructor(http: Http, private sanitizer: DomSanitizer) {
    super(http);
  }

  public querySafeHtml(): Observable<Materials[]> {
    return this.query().$observable.map(array => {
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
