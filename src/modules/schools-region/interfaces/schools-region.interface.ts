import {Region} from '../../../app/admin/edit/shared/region';
import {Document} from 'mongoose';

export interface Person {
  name: string;
  post: string;
  telephone: string;
  stationary: string;
}

export interface SchoolsRegion extends Document{
  title: string;
  region: Region;
  type: number;
  address: string;
  site: string;
  email: string;

  mainPerson: Person;
}

