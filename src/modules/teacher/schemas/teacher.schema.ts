import * as mongoose from 'mongoose';

const TeacherFile = new mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
}, { _id: false });

export const TeacherSchema = new mongoose.Schema({
  name: {type: String, required: true},
  suname: {type: String, required: true},
  middleName: {type: String, required: true},
  file: TeacherFile
});
