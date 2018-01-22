import {Injectable} from '@angular/core';
import {ODResource} from '../core/od-resource';
import {Mail} from './mail';
import {IResourceMethod, ResourceAction, ResourceParams, ResourceRequestMethod} from '@ngx-resource/core';

@Injectable()
@ResourceParams({pathPrefix: 'mail'})
export class ContactsService extends ODResource {
  @ResourceAction({method: ResourceRequestMethod.Post})
  sendMail: IResourceMethod<Mail, void>;
}
