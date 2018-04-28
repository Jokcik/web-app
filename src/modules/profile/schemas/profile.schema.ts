import * as mongoose from 'mongoose';
import {SchoolsRegionModelName} from '../../constants';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const ProfileSchema = new mongoose.Schema({
  surname: String,
  name: String,
  middleName: String,
  passport: String,
  schools: {type: ObjectId, ref: SchoolsRegionModelName},
  role: {
    type: Number,
    default: 0
  },
  password: String,
  nickname: {
    type: String,
    unique: true
  },
  access_token: String
});

ProfileSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.password;
  }
});
