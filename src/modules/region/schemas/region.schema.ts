import * as mongoose from 'mongoose';

export const RegionSchema = new mongoose.Schema({
  title: String,
  telephone: String,
});
