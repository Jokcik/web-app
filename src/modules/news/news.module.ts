import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsProviders } from './news.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [NewsController],
  components: [
    NewsService,
    ...NewsProviders,
  ],
})
export class NewsModule {}
