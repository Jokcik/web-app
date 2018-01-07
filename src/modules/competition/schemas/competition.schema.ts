import * as mongoose from 'mongoose';
import {CompetitionLevelSchema} from '../../others/schemas/competition-level.schema';
import ObjectID = mongoose.Schema.Types.ObjectId;

export const CompetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year2017: {
    type: Boolean,
    default: false
  },
  year2018: {
    type: Boolean,
    default: false
  },
  year2019: {
    type: Boolean,
    default: false
  },
  year2020: {
    type: Boolean,
    default: false
  },
  year2021: {
    type: Boolean,
    default: false
  },
  year2022: {
    type: Boolean,
    default: false
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
