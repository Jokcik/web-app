import { Connection } from 'mongoose';
import {DbConnectionToken, SchoolsRegionModelName, SchoolsRegionModelToken} from '../constants';
import {SchoolsRegionSchema} from './schemas/schools-region.schema';

export const SchoolsRegionProvider = [
  {
    provide: SchoolsRegionModelToken,
    useFactory: (connection: Connection) => connection.model(SchoolsRegionModelName, SchoolsRegionSchema),
    inject: [DbConnectionToken],
  },
];
