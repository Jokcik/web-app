import * as mongoose from 'mongoose';
import {DbConnectionToken} from '../constants';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://admin:qwer1996@ds121686.mlab.com:21686/heroku_x83vwg31', {
        useMongoClient: true,
      });
    },
  },
];
