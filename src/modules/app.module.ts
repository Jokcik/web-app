import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import {RegionModule} from './region/region.module';

@Module({
  modules: [
    NewsModule,
    RegionModule
  ],
})
export class ApplicationModule {
}
