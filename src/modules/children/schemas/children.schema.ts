import * as mongoose from 'mongoose';
import {InstrumentsModelName, SchoolsRegionModelName} from '../../constants';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const ChildrenSchema = new mongoose.Schema({
  name: String,
  surname: String,
  middleName: String,

  schools: {
    type: ObjectId,
    ref: SchoolsRegionModelName
  },
  instruments: {
    type: ObjectId,
    ref: InstrumentsModelName
  },

  classDSHI: Number,
  class: Number
});
