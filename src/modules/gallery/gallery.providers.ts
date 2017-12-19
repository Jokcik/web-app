import { Connection } from 'mongoose';
import {DbConnectionToken, GalleryModelName, GalleryModelToken} from '../constants';
import {GallerySchema} from './schemas/gallery.schema';

export const GalleryProviders = [
  {
    provide: GalleryModelToken,
    useFactory: (connection: Connection) => connection.model(GalleryModelName, GallerySchema),
    inject: [DbConnectionToken],
  },
];
