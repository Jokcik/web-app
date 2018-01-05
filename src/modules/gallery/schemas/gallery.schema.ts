import * as mongoose from 'mongoose';

export const GallerySchema = new mongoose.Schema({
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

GallerySchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
