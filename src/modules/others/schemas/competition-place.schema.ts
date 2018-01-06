import * as mongoose from 'mongoose';

export const CompetitionPlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
}, {collection: 'competition_place'});
