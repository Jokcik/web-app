import * as mongoose from 'mongoose';

export const SpecializationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
});
