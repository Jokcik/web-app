import * as mongoose from 'mongoose';
import {RegionModelName} from '../../constants';
import {Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;

export const PersonSchema = new mongoose.Schema({
  name: String,
  post: String,
  telephone: String,
  stationary: String
}, {_id: false});

export const SchoolsRegionSchema = new mongoose.Schema({
  title: String,
  region: {
    type: ObjectId,
    ref: RegionModelName
  },
  type: Number,
  address: String,
  site: String,
  email: String,

  mainPerson: PersonSchema,
  oldPerson: [PersonSchema]
});
