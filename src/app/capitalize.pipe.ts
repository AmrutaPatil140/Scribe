import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let firstchar = value.substring(0,1);
    let allchar = value.substring(1, value.length);

    let newvalue = firstchar.toUpperCase() + allchar.toLocaleLowerCase();
    return newvalue;

  }

}
