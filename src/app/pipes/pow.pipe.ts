import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  transform(value: any, pow: any = 1): any {
    return Math.pow(value, pow);
  }

}
