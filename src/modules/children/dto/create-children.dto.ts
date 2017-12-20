import {Schools} from '../../../app/admin/edit/shared/school';

export class CreateChildrenDto {
  readonly name: string;
  readonly surname: string;
  readonly middleName: string;
  readonly schools: string;
  readonly instruments: string;
  readonly classDSHI: number;
  readonly class: number;
}
