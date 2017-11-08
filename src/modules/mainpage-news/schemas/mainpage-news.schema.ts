import * as mongoose from 'mongoose';
import {DescriptionSchema} from './description.schema';

export const MainpageNewsSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: {
    type: DescriptionSchema
  }
});
