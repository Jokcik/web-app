import { Connection } from 'mongoose';
import {DbConnectionToken, NewsModelName, NewsModelToken} from '../constants';
import {NewsSchema} from './schemas/news.schema';

export const NewsProviders = [
  {
    provide: NewsModelToken,
    useFactory: (connection: Connection) => connection.model(NewsModelName, NewsSchema),
    inject: [DbConnectionToken],
  },
];
