import { Document } from 'mongoose';

export interface Competition extends Document {
  readonly _id: string;
  readonly title: string;
  readonly date: Date;
  readonly level: string;
}
