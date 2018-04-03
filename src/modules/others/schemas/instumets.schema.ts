import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import {SpecializationModelName} from '../../constants';

export const InstrumentsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  specialization: {
    type: ObjectId,
    ref: SpecializationModelName
  }
});
