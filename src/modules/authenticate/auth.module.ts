import {Module} from '@nestjs/common';
import {JwtStrategy} from './jwt.strategy';
import {DatabaseModule} from '../database/database.module';
import {AuthService} from './auth.service';
import {ProfileService} from '../profile/profile.service';

@Module({
  modules: [DatabaseModule],
  components: [JwtStrategy],
})
export class AuthModule {
}
