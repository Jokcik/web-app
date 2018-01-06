import * as mongoose from 'mongoose';
import {CompetitionLevelSchema} from '../../others/schemas/competition-level.schema';
import ObjectID = mongoose.Schema.Types.ObjectId;
import {CompetitionPlaceSchema} from '../../others/schemas/competition-place.schema';

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
  place: {
    type: ObjectID,
    ref: CompetitionPlaceSchema
  }
});

CompetitionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
