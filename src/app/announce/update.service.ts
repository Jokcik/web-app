import {Subject} from 'rxjs';
import {Materials} from '../news/shared/materials';

export class UpdateService {
  public changeAnnounce: Subject<void> = new Subject<void>();
  public changeNews: Subject<void> = new Subject<void>();
}
