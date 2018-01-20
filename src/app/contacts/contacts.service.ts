import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Injectable} from '@angular/core';
import {ODResource} from '../core/od-resource';
import {Http, RequestMethod} from '@angular/http';
import {Mail} from './mail';

@Injectable()
@ResourceParams({pathPrefix: 'mail'})
export class ContactsService extends ODResource {
  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({method: RequestMethod.Post})
  sendMail: ResourceMethod<Mail, void>;
}
