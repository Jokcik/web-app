import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import {RegionModule} from './region/region.module';
import {SchoolsRegionModule} from './schools-region/schools-region.module';

@Module({
  modules: [
    NewsModule,
    RegionModule,
    SchoolsRegionModule
  ],
})
export class ApplicationModule {
}
