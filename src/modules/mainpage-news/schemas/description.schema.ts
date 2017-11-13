import * as mongoose from 'mongoose';

export const DescriptionSchema = new mongoose.Schema({
  description: String,
  short_description: String
}, {_id: false});
