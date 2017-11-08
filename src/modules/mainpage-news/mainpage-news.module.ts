import { Module } from '@nestjs/common';
import { MainpageNewsController } from './mainpage-news.controller';
import { MainpageNewsService } from './mainpage-news.service';
import { mainpageNewsProviders } from './mainpage-news.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [MainpageNewsController],
  components: [
    MainpageNewsService,
    ...mainpageNewsProviders,
  ],
})
export class MainpageNewsModule {}
