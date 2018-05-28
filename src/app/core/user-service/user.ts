import {Schools} from '../../admin/edit/shared/school';

export const Roles = {
  ADMIN: 0
};

export class User {
  _id: string;
  surname: string;
  name: string;
  middleName: string;
  role: number = Roles.ADMIN;
  nickname: string;

  schools: Schools;
}
