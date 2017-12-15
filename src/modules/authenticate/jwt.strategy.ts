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


  authenticate(req: e.Request, options?: any): void {
    console.log('authenticate');
    super.authenticate(req, options);
  }

  success(user: any, info: any): void {
    console.log('success')
    super.success(user, info);
  }

  redirect(url: string, status?: number): void {
    console.log('redirect')
    super.redirect(url, status);
  }



  pass(): void {
    console.log('pass')
    super.pass();
  }

  error(err: Error): void {
    console.log('error')
    super.error(err);
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
