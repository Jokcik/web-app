import * as mongoose from 'mongoose';
import {
  CompetitionLevelModelName,
  CompetitionModelName,
  CompetitionPlaceModelName,
  InstrumentsModelName,
  SchoolsRegionModelName, SpecializationModelName, TeacherModelName
} from '../../constants';
import ObjectId = mongoose.Schema.Types.ObjectId;

const ChildrenCompetitionSchema = new mongoose.Schema({
  competition: {type: ObjectId, ref: CompetitionModelName, required: true},
  year: {type: Number, required: true},
  specialization: {type: ObjectId, ref: SpecializationModelName, required: true},
  level: {type: ObjectId, ref: CompetitionLevelModelName, required: true},
  place: {type: ObjectId, ref: CompetitionPlaceModelName, required: true},
  teacher: {type: ObjectId, ref: TeacherModelName, required: true},
}, {_id: false});

const SsuzInfo  = new mongoose.Schema({
  year: Number,
  name: Number,
  otherName: String,
  specialization: {type: ObjectId, ref: SpecializationModelName},
}, {_id: false});

export const ChildrenSchema = new mongoose.Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  middleName: {type: String, required: true},

  schools: {type: ObjectId, ref: SchoolsRegionModelName, required: true},
  instruments: {type: ObjectId, ref: InstrumentsModelName, required: true},

  classDSHI: Number,
  class: Number,
  rating: {
    type: Number,
    default: 0
  },

  birthday: Date,
  graduateDSHI: Number,
  ssuz: Boolean,
  leave: Boolean,
  competitions: [ChildrenCompetitionSchema],

  ssuzInfo: SsuzInfo,
});
