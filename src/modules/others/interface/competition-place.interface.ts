import { Document } from 'mongoose';

export interface CompetitionPlace extends Document {
  title: string;
  rate: number;
}
