import {Description} from '../news/shared/description';
import {MockDescription} from './mock';


export class MainpageService {
  public get(): Description[] {
    return MockDescription;
  }
}
