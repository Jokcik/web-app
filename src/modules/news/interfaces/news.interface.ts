import { Document } from 'mongoose';
import {Description} from './news';

export interface News extends Document {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly description: Description;
}
