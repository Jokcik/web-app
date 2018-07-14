import {Schools} from '../../admin/edit/shared/school';

export const Roles = {
  USER: 0,
  KOORDINATOR: 1,
  MATERIAL: 2,
  ADMIN: 5,
};

export class User {
  _id: string;
  surname: string;
  name: string;
  middleName: string;
  role: number = Roles.ADMIN;
  nickname: string;

  schools: Schools;

  hasAccessMaterial() {
    return this.role === Roles.MATERIAL || this.hasKoordinator();
  }

  hasKoordinator() {
    return this.role === Roles.KOORDINATOR || this.hasModerator();
  }

  hasModerator() {
    return this.role === Roles.ADMIN;
  }
}
