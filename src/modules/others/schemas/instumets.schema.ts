import * as mongoose from 'mongoose';
import {SpecializationSchema} from './specialization.schema.ru';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const InstrumentsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  specialization: {
    type: ObjectId,
    ref: SpecializationSchema
  }
});
