import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, arg: number): string {
    if (arg == 0 || arg > value.length - 1) {
      return value;
    } else {
      return value.slice(0, arg);
    }
  }
}
