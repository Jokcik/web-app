import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  surname: String,
  name: String,
  middleName: String,
  passport: String,
  role: {
    type: Number,
    default: 0
  },
  password: String,
  nickname: {
    type: String,
    unique: true
  },
  access_token: String
});

ProfileSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.password;
  }
});
