import * as mongoose from 'mongoose';

export const RegionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
});
