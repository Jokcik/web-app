import * as mongoose from 'mongoose';
import {DescriptionSchema} from './description.schema';
import * as path from 'path';

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

NewsSchema.methods = {

  toJSON() {
    const news = this.toObject();
    if (news.img) {
      const mime = path.extname(news.img);
      const filename = path.basename(news.img, mime);
      const dir = path.dirname(news.img);

      news.preview = dir + '/' + filename + '_preview' + mime;
    }

    return news;
  }
};
