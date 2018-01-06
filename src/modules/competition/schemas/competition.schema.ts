import * as mongoose from 'mongoose';

export const CompetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

CompetitionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
