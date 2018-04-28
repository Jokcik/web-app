import {Body, Controller, Get, Post, Request} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {Profile} from './interfaces/profile.interface';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profilesService: ProfileService) {
  }

  @Post()
  async login(@Body() auth: any) {
    return this.profilesService.login(auth);
  }

  @Post('register')
  async register(@Body() user: any, @Request() req) {
    return this.profilesService.register(req.user, user);
  }

  @Get()
  async getUser(@Request() req): Promise<Profile> {
    return await this.profilesService.getUser(req.user);
  }
}
