import { Document } from 'mongoose';

export interface Profile extends Document {
  readonly id: string;
  readonly surname: string;
  readonly name: string;
  readonly middleName: string;
  readonly role: number;
  readonly nickname: string;
}
