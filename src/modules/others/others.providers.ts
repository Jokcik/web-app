import { Connection } from 'mongoose';
import {
  CompetitionLevelModelName,
  CompetitionLevelModelToken, CompetitionPlaceModelName, CompetitionPlaceModelToken,
  DbConnectionToken, InstrumentsModelName, InstrumentsModelToken, RegionModelName, RegionModelToken, SpecializationModelName,
  SpecializationModelToken
} from '../constants';
import {InstrumentsSchema} from './schemas/instumets.schema';
import {SpecializationSchema} from './schemas/specialization.schema.ru';
import {CompetitionLevelSchema} from './schemas/competition-level.schema';
import {CompetitionPlaceSchema} from './schemas/competition-place.schema';

export const OthersProviders = [
  {
    provide: InstrumentsModelToken,
    useFactory: (connection: Connection) => connection.model(InstrumentsModelName, InstrumentsSchema),
    inject: [DbConnectionToken],
  },
  {
    provide: SpecializationModelToken,
    useFactory: (connection: Connection) => connection.model(SpecializationModelName, SpecializationSchema),
    inject: [DbConnectionToken],
  },
  {
    provide: CompetitionLevelModelToken,
    useFactory: (connection: Connection) => connection.model(CompetitionLevelModelName, CompetitionLevelSchema),
    inject: [DbConnectionToken],
  },
  {
    provide: CompetitionPlaceModelToken,
    useFactory: (connection: Connection) => connection.model(CompetitionPlaceModelName, CompetitionPlaceSchema),
    inject: [DbConnectionToken],
  },
];
