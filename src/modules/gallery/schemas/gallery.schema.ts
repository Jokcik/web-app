import * as mongoose from 'mongoose';
import * as path from "path";
import {NewsSchema} from '../../news/schemas/news.schema';

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

GallerySchema.methods = {

  toJSON() {
    const gallery = this.toObject();
    if (gallery.img) {
      const mime = path.extname(gallery.img);
      const filename = path.basename(gallery.img, mime);
      const dir = path.dirname(gallery.img);

      gallery.preview = dir + '/' + filename + '_preview' + mime;
    }

    return gallery;
  }
};
