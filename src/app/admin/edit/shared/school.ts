import {Region} from './region';

class Person {
  name: String;
  post: String;
  telephone: String;
  stationary: String
}

export class Schools {
  title: String;
  region: Region;
  type: Number;
  address: String;
  site: String;
  email: String;

  mainPerson: Person;
  oldPerson: [Person]
}

