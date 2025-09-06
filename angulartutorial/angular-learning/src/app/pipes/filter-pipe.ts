import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], args1: string): string[] {
    let data = value.filter((item) => item.toLocaleLowerCase().includes(args1.toLocaleLowerCase()));
    console.log(data);
    return data;
  }
}
