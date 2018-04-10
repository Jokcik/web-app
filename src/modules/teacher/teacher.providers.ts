import { Connection } from 'mongoose';
import {DbConnectionToken, TeacherModelName, TeacherModelToken} from '../constants';
import {TeacherSchema} from './schemas/teacher.schema';

export const TeacherProviders = [
  {
    provide: TeacherModelToken,
    useFactory: (connection: Connection) => connection.model(TeacherModelName, TeacherSchema),
    inject: [DbConnectionToken],
  },
];
