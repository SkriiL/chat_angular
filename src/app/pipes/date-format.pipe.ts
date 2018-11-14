import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date, type: string): any {
    if (type === 'dateShort') {
      return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
    } else if (type === 'time') {
      return date.getHours() + ':' + date.getMinutes();
    }
  }

}
