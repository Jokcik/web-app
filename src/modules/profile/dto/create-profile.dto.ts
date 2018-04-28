import {Schools} from '../../../app/admin/edit/shared/school';

export class CreateProfileDto {
  readonly surname: string;
  readonly name: string;
  readonly middleName: string;
  readonly role: number;
  readonly nickname: string;

  readonly password: string;
  readonly schools: Schools;
}
