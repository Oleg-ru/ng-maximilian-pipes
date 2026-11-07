import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number): unknown {
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value)
    } else {
      val = value;
    }

    const outputTemp = val * (9 / 5) + 32;
    return `${outputTemp} °F`;
  }
}
