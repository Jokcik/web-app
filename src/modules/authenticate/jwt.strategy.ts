import * as passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Component} from '@nestjs/common';


@Component()
export class JwtStrategy extends Strategy {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'bgiikod',
      },
      async (req, payload, next) => await this.verify(req, payload, next)
    );
    passport.use(this);
  }


  fail(status: number): void {
    console.log(status);
    super.fail(status);
  }

  public async verify(req: Request, user, done) {
    console.log('123');
    console.log(user);
    done(null, user);
  }
}
