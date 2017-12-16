import * as mongoose from 'mongoose';
import {DescriptionSchema} from './description.schema';

export const NewsSchema = new mongoose.Schema({
  title: String,
  url: String,
  img: String,
  description: {
    type: DescriptionSchema
  },
  main: Boolean
});
