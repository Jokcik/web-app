import * as mongoose from 'mongoose';

export const CompetitionLevelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
}, {collection: 'competition_level'});
