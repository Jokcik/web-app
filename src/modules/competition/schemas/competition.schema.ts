import * as mongoose from 'mongoose';
import {CompetitionLevelSchema} from '../../others/schemas/competition-level.schema';
import {SpecializationSchema} from '../../others/schemas/specialization.schema.ru';
import ObjectID = mongoose.Schema.Types.ObjectId;
import {CompetitionFiles} from '../../../app/admin/edit/shared/competition';
import {CompetitionLevelModelName, SpecializationModelName} from '../../constants';

export const CompetitionFilesSchema = new mongoose.Schema({
  name: String,
  url: String,
  title: String
}, {_id: false});


export const CompetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  shortTitle: {
    type: String,
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
  level: {
    type: ObjectID,
    ref: CompetitionLevelModelName
  },
  specialization: [{
    type: ObjectID,
    ref: SpecializationModelName
  }],

  files: {
    year2017: [CompetitionFilesSchema],
    year2018: [CompetitionFilesSchema],
    year2019: [CompetitionFilesSchema],
    year2020: [CompetitionFilesSchema],
    year2021: [CompetitionFilesSchema],
    year2022: [CompetitionFilesSchema]
  }
});

CompetitionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
