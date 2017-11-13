import { Module } from '@nestjs/common';
import { MainpageNewsModule } from './mainpage-news/mainpage-news.module';

@Module({
  modules: [MainpageNewsModule],
})
export class ApplicationModule {
}
