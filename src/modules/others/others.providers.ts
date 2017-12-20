import { Connection } from 'mongoose';
import {
  DbConnectionToken, InstrumentsModelName, InstrumentsModelToken, RegionModelName, RegionModelToken, SpecializationModelName,
  SpecializationModelToken
} from '../constants';
import {InstrumentsSchema} from './schemas/instumets.schema';
import {SpecializationSchema} from './schemas/specialization.schema.ru';

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
];
