import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false // To watch value !IMPORTANT
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, fieldName: string, searchString: string) {
    console.log('Filter pipe started');

    if (searchString.length === 0 || searchString === '') return carList;

    return carList.filter((car) => car[fieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
