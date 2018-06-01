import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'odLimit'})
export class OdLimitPipe implements PipeTransform {

  transform(value: any[], param: number): any[] {
    return value.slice(0, param);
  }
}
