import {ReflectMetadata} from '@nestjs/common';

export const DbConnectionToken = 'DbConnectionToken';

export const MainpageNewsModelToken = 'MainpageNewsModelToken';
export const MainpageNewsModelName = 'MainpageNews';

export const Roles = (...roles: number[]) => ReflectMetadata('roles', roles);

export const RolesTypes = {
  ALL: 0,
  CREATOR: 1,
  ADMIN: 2
};
