import { Connection } from 'mongoose';
import {DbConnectionToken, ProfileModelName, ProfileModelToken} from '../constants';
import {ProfileSchema} from './schemas/profile.schema';

export const ProfileProviders = [
  {
    provide: ProfileModelToken,
    useFactory: (connection: Connection) => connection.model(ProfileModelName, ProfileSchema),
    inject: [DbConnectionToken],
  },
];
