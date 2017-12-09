import {MiddlewaresConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';
import { RegionProviders } from './region.providers';
import { DatabaseModule } from '../database/database.module';
import * as passport from 'passport';

const routes: any[] = [
  { path: '/region*',  method: RequestMethod.POST },
  { path: '/region*',  method: RequestMethod.PUT },
  { path: '/region*',  method: RequestMethod.DELETE },
];

@Module({
  modules: [DatabaseModule],
  controllers: [RegionController],
  components: [
    RegionService,
    ...RegionProviders,
  ],
})
export class RegionModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(passport.initialize()).with().forRoutes(...routes);
    consumer.apply(passport.authenticate('jwt', { session: false })).forRoutes(...routes);
  }
}
