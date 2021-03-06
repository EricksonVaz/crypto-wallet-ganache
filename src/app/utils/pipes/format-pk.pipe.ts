import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPk'
})
export class FormatPkPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,4)+"..."+value.substring(value.length -4);
  }

}
