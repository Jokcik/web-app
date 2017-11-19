import { Module } from '@nestjs/common';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';
import { RegionProviders } from './region.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [RegionController],
  components: [
    RegionService,
    ...RegionProviders,
  ],
})
export class RegionModule {}
