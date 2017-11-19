import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';

@Module({
  modules: [NewsModule],
})
export class ApplicationModule {
}
