// https://angular.io/api?query=pipe

import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  cars = [
    {name: 'HOnda', descr: 'Descr-1'},
    {name: 'Amahonda', descr: 'Descr-2'},
    {name: 'Sivic', descr: 'Descr-3'},
    {name: 'Lada', descr: 'Descr-4'}
  ];
  searchCar = '';
  num = 10;
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

  asyncTitle = Observable.of('Async title 3seconds').delay(3000);
    // .subscribe((str) => this.title = str});

  addCar() {
    this.cars.push({name: 'new name', descr: 'generated description'})
  }

  constructor() {
  }

  ngOnInit() {
  }

}
