import { Module } from '@nestjs/common';
import { SchoolsRegionController } from './schools-region.controller';
import { SchoolsRegionService } from './schools-region.service';
import { SchoolsRegionProvider } from './schools-region.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [SchoolsRegionController],
  components: [
    SchoolsRegionService,
    ...SchoolsRegionProvider,
  ],
})
export class SchoolsRegionModule {}
