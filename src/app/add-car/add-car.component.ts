import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.sass']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2017;
  addCarStatus = false;

  // @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor(private service: CarsService) {

  }

  ngOnInit() {
  }

  addCarToList(name: string) {
    this.service.addCar(name);
  }

  addCar(carNameEl :HTMLInputElement) {
    this.service.addCar(carNameEl.value);

    this.carName = '';
    this.carYear = 2017;
    // this.addCarStatus = true;
  }

  // addCar(carNameEl :HTMLInputElement) {
  //   // console.debug(this.carYearInput);
  //   this.carEmitter.emit({
  //     // name: this.carName,
  //     name: carNameEl.value,
  //     year: +this.carYearInput.nativeElement.value
  //     // + - convert to number, default value = string
  //   });
  //
  //   this.carName = '';
  //   this.carYear = 2017;
  //   this.addCarStatus = true;
  // }
}
