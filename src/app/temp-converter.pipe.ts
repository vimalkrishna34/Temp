import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
  standalone: true
})
export class TempConverterPipe implements PipeTransform {
  transform(value: number, scale: string): number {
    if (!value) return 0;

    if (scale === 'F') {
      return (value * 9/5) + 32;
    }
    else if (scale === 'C') {
      return (value - 32) * 5/9;
    }
    
    return value;
  }
}
