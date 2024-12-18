import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;

  transform(value: string, ...args: any[]): string {
    return value.split('').reverse().join('').trim();

  }

}
