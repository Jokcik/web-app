import {Description} from '../news/shared/materials';
import {MockDescription} from './mock';
import {ODResource} from '../core/od-resource';

export class MainpageService extends ODResource {
  public get(): Description[] {
    return MockDescription;
  }


}
