import { Connection } from 'mongoose';
import {DbConnectionToken, ChildrenModelName, ChildrenModelToken} from '../constants';
import {ChildrenSchema} from './schemas/children.schema';

export const ChildrenProviders = [
  {
    provide: ChildrenModelToken,
    useFactory: (connection: Connection) => connection.model(ChildrenModelName, ChildrenSchema),
    inject: [DbConnectionToken],
  },
];
