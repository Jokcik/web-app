import { Connection } from 'mongoose';
import {DbConnectionToken, CompetitionModelName, CompetitionModelToken} from '../constants';
import {CompetitionSchema} from './schemas/competition.schema';

export const CompetitionProviders = [
  {
    provide: CompetitionModelToken,
    useFactory: (connection: Connection) => connection.model(CompetitionModelName, CompetitionSchema),
    inject: [DbConnectionToken],
  },
];
