import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  name: {type: String, required: true},
  suname: {type: String, required: true},
  middleName: {type: String, required: true},
});
