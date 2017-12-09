export const Roles = {
  ADMIN: 0
};

export class User {
  surname: string;
  name: string;
  middleName: string;
  role: number = Roles.ADMIN;
  nickname: string;
}
