import { Document } from 'mongoose';

export interface Gallery extends Document {
  readonly _id: string;
  readonly title: string;
  readonly img: string;
}
