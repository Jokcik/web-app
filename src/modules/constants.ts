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

export const TeacherModelToken = 'TeacherModelToken';
export const TeacherModelName = 'Teacher';

export const ChildrenModelToken = 'ChildrenModelToken';
export const ChildrenModelName = 'Children';

export const SpecializationModelToken = 'SpecializationModelToken';
export const SpecializationModelName = 'Specialization';

export const InstrumentsModelToken = 'InstrumentsModelToken';
export const InstrumentsModelName = 'Instruments';

export const CompetitionModelToken = 'CompetitionModelToken';
export const CompetitionModelName = 'Competition';

export const CompetitionLevelModelToken = 'CompetitionLevelModelToken';
export const CompetitionLevelModelName = 'CompetitionLevel';

export const CompetitionPlaceModelToken = 'CompetitionPlaceModelToken';
export const CompetitionPlaceModelName = 'CompetitionPlace';

export const Roles = (...roles: number[]) => ReflectMetadata('roles', roles);

export const RolesTypes = {
  SCHOOL: 0,
  RUMC: 1
};
