import * as mongoose from 'mongoose';

export const GallerySchema = new mongoose.Schema({
  title: String,
  img: String
});

GallerySchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
  }
});
