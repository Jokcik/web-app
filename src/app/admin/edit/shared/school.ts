import {Region} from './region';

class Person {
  name: String;
  post: String;
  telephone: String;
  stationary: String
}

export class Schools {
  _id: string;
  title: String = '';
  region: Region = new Region();
  type: Number = 0;
  address: String = '';
  site: String = '';
  email: String = '';

  mainPerson: Person = new Person();
  oldPerson: [Person]
}

