import {ItemDocument} from './item-document';

export class Documents {
  _id?: string;
  title: string;
  documents?: ItemDocument[] = [];
}
