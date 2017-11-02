import {Resource, ResourceActionBase, ResourceParams} from 'ngx-resource';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
@ResourceParams({url: environment.host})
export class ODResource extends Resource {
  protected path: string = '';

  $getUrl(methodOptions?: ResourceActionBase): string | Promise<string> {
    let url = super.$getUrl(methodOptions);
    return url + this.path;
  }
}
