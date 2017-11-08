import { Document } from 'mongoose';

export interface MainpageNews extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
