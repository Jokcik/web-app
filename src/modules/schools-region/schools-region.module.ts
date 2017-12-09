import {MiddlewaresConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { SchoolsRegionController } from './schools-region.controller';
import { SchoolsRegionService } from './schools-region.service';
import { SchoolsRegionProvider } from './schools-region.providers';
import { DatabaseModule } from '../database/database.module';
import * as passport from 'passport';

const routes: any[] = [
  { path: '/schools-region*',  method: RequestMethod.POST },
  { path: '/schools-region*',  method: RequestMethod.PUT },
  { path: '/schools-region*',  method: RequestMethod.DELETE },
];

@Module({
  modules: [DatabaseModule],
  controllers: [SchoolsRegionController],
  components: [
    SchoolsRegionService,
    ...SchoolsRegionProvider,
  ],
})
export class SchoolsRegionModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(passport.initialize()).with().forRoutes(...routes);
    consumer.apply(passport.authenticate('jwt', { session: false })).forRoutes(...routes);
  }
}
