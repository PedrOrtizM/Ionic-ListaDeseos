import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string , defaul:string): string {

    if(value){
      return value;

    }
    else{
      return defaul;

    }

  // return ( value )? value : defaul
  }
}
