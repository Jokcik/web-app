import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import {RegionModule} from './region/region.module';
import {SchoolsRegionModule} from './schools-region/schools-region.module';
import {ProfileModule} from './profile/profile.module';
import {AuthModule} from './authenticate/auth.module';
import {UploadsModule} from './uploads/uploads.module';
import {GalleryModule} from './gallery/gallery.module';
import {ChildrenModule} from './children/children.module';

@Module({
  modules: [
    NewsModule,
    RegionModule,
    SchoolsRegionModule,
    AuthModule,
    ProfileModule,
    GalleryModule,
    ChildrenModule,
    UploadsModule,
  ],
})
export class ApplicationModule {
}
