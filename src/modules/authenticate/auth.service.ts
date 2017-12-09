import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import {ProfileService} from '../profile/profile.service';

@Component()
export class AuthService {
  constructor() {
  }

  async createToken(user) {
    const secretOrKey = 'bgiikod';
    const token = jwt.sign(user, secretOrKey, { expiresIn: '1y' });
    return {
      expires_in: '1y',
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    return true;
  }
}
