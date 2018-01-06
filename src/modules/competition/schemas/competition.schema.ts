import * as mongoose from 'mongoose';
import {CompetitionLevelSchema} from '../../others/schemas/competition-level.schema';
import ObjectID = mongoose.Schema.Types.ObjectId;

export const CompetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  level: {
    type: ObjectID,
    ref: CompetitionLevelSchema
  },
});

CompetitionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
