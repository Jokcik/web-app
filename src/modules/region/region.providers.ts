import { Connection } from 'mongoose';
import {DbConnectionToken, RegionModelName, RegionModelToken} from '../constants';
import {NewsSchema} from './schemas/region.schema';

export const RegionProviders = [
  {
    provide: RegionModelToken,
    useFactory: (connection: Connection) => connection.model(RegionModelName, NewsSchema),
    inject: [DbConnectionToken],
  },
];
