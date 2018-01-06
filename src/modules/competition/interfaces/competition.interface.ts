import { Document } from 'mongoose';

export interface Competition extends Document {
  readonly _id: string;
  readonly name: string;
  readonly date: Date;
  readonly level: string;
  readonly place: string;
}
