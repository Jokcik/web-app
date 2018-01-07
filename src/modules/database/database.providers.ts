import * as mongoose from 'mongoose';
import {DbConnectionToken} from '../constants';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://admin:1234@85.143.175.134:27017/odbgiik', {
        useMongoClient: true,
      });
    },
  },
];
