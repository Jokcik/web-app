import { Connection } from 'mongoose';
import {DbConnectionToken, MainpageNewsModelName, MainpageNewsModelToken} from '../constants';
import {MainpageNewsSchema} from './schemas/mainpage-news.schema';

export const mainpageNewsProviders = [
  {
    provide: MainpageNewsModelToken,
    useFactory: (connection: Connection) => connection.model(MainpageNewsModelName, MainpageNewsSchema),
    inject: [DbConnectionToken],
  },
];
