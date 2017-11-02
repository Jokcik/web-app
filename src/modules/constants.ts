import {ReflectMetadata} from '@nestjs/common';

export const DbConnectionToken = 'DbConnectionToken';

export const CupModelToken = 'CupModelToken';
export const CupModelName = 'Cups';

export const GameModelToken = 'GameModelToken';
export const GameModelName = 'Games';

export const UserModelToken = 'UserModelToken';
export const UserModelName = 'Users';

export const TeamModelToken = 'TeamsModelToken';
export const TeamModelName = 'Teams';

export const Roles = (...roles: number[]) => ReflectMetadata('roles', roles);

export const RolesTypes = {
  ALL: 0,
  CREATOR: 1,
  JUDGES: 2,
  ADMIN: 3
};
