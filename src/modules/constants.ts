import {ReflectMetadata} from '@nestjs/common';

export const DbConnectionToken = 'DbConnectionToken';

export const NewsModelToken = 'NewsModelToken';
export const NewsModelName = 'News';

export const SchoolsRegionModelToken = 'SchoolsRegionModelToken';
export const SchoolsRegionModelName = 'SchoolsRegion';

export const RegionModelToken = 'RegionModelToken';
export const RegionModelName = 'Region';

export const ProfileModelToken = 'ProfileModelToken';
export const ProfileModelName = 'Profile';

export const GalleryModelToken = 'GalleryModelToken';
export const GalleryModelName = 'Gallery';


export const Roles = (...roles: number[]) => ReflectMetadata('roles', roles);

export const RolesTypes = {
  ALL: 0,
  ADMIN: 1
};
