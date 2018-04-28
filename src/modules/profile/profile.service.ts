import {Model, Schema} from 'mongoose';
import {BadRequestException, Component, ForbiddenException, Inject} from '@nestjs/common';
import {Profile} from './interfaces/profile.interface';
import {ProfileModelToken} from '../constants';
import {AuthService} from '../authenticate/auth.service';

@Component()
export class ProfileService {
  constructor(@Inject(ProfileModelToken) private readonly profilesModel: Model<Profile>,
              private authService: AuthService) {
  }

  async register(currentUser, user): Promise<any> {
    console.log(currentUser.role, user.role);
    if (currentUser.role <= user.role) {
      throw new ForbiddenException();
    }

    const profiles = new this.profilesModel(user);
    const regUser = await profiles.save();

    let token = await this.authService.createToken(Object.assign({}, user, {password: undefined, _id: regUser._id}));
    return this.profilesModel.findByIdAndUpdate(regUser._id, {$set: {access_token: token.access_token}}, {new: true});
  }

  async login(auth: {password: string, login: string}): Promise<any> {
    let user = await this.profilesModel.findOne({nickname: auth.login, password: auth.password});
    if (!user) {
      throw new BadRequestException();
    }
    return user;
  }

  public async getUser(user) {
    return await this.profilesModel.findById(user._id).populate({path: 'schools', options: {populate: 'region'}});
  }
}
