import { Document } from 'mongoose';

export interface CompetitionLevel extends Document {
  title: string;
  rate: number;
}
