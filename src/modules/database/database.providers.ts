import * as mongoose from 'mongoose';
import {DbConnectionToken} from '../constants';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://admin:qwer1234@ds125906.mlab.com:25906/heroku_z97b6wpj', {
        useMongoClient: true,
      });
    },
  },
];
