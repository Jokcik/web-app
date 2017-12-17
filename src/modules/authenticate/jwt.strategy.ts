import * as passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Component} from '@nestjs/common';
import * as e from 'express';


@Component()
export class JwtStrategy extends Strategy {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'bgiikod',
        ignoreExpiration: true
      },
      async (req, payload, next) => await this.verify(req, payload, next)
    );
    passport.use(this);
  }


  public async verify(req: Request, user, done) {
    done(null, user);
  }
}
