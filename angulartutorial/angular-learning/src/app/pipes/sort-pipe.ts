import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(data: any[], arg: string): any {
    if (!arg) {
      return data;
    } else {
      return data.sort((a: any, b: any) => {
        if (a[arg] > b[arg]) return 1;
        if (a[arg] < b[arg]) return -1;
        return 0;
      });
    }
  }
}
