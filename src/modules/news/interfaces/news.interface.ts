import { Document } from 'mongoose';
import {Description} from './news';

export interface News extends Document {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly img: string;
  readonly type: number;
  readonly date: Date;
  readonly description: Description;
}
