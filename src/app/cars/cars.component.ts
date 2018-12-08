import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass'],
  // encapsulation: ViewEncapsulation.Native - shodow root encapsulated
  // encapsulation: ViewEncapsulation.None - as usual style file (not encapsulated)
  // encapsulation: ViewEncapsulation.Emulated - default (encapsulated by component)
  providers: [CarsService]
})
export class CarsComponent implements OnInit {
  // items = [{id: 3, name: 'item3'}, {id: 4, name: 'item4'}, {id: 5, name: 'item5'}];
  dates = [
    new Date(2015, 3, 1).toDateString(),
    new Date(2011, 5, 12).toDateString(),
    new Date(2012, 6, 7).toDateString()
  ];

  cars = [];
  // onKeyUp(value) {
  //   // this.inputText = (<HTMLInputElement>event.target).value;
  //   this.inputText = value;
  // }

  // cycles
  constructor(private service: CarsService) {

  }

  ngOnInit() {
    this.cars = this.service.cars;
  }

  // addCarToList(name: string) {
  //   this.service.addCar(name);
  // }

  // updateCarList(car: { name: string, year: number, isSold: false }) {
  //   this.addCarToList(car.name);
  // }
}
