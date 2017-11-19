import * as mongoose from 'mongoose';
import {Types} from 'mongoose';
import ObjectId = Types.ObjectId;
import {RegionModelName} from '../../constants';

export const PersonSchema = new mongoose.Schema({
  name: String,
  post: String,
  telephone: String,
  stationary: String
});

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
