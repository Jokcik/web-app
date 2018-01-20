import * as mongoose from 'mongoose';
import {DescriptionSchema} from './description.schema';
import {Schema} from 'mongoose';

export const NewsSchema = new mongoose.Schema({
  title: String,
  url: String,
  img: String,
  date: Date,
  description: {
    type: DescriptionSchema
  },
  type: Number,
  images: [String]
});
