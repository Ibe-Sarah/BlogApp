import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authentication'
})
export class AuthenticationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
