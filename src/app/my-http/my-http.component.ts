import {Component, OnInit} from '@angular/core';
import {MyCarsService} from "../services/my-cars.service";

interface Cars {
  name: string,
  color: string,
  id: number
}

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.sass'],
  providers: [MyCarsService]
})
export class MyHttpComponent implements OnInit {

  cars: Cars[] = [];
  colors: string[] = [
    'red',
    'blue',
    'gray',
    'yellow',
    'pink',
    'green'
  ];
  carName: string = '';
  carColor: string = '';
  appTitle;

  constructor(private carsService: MyCarsService) {

  }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
    // this.carsService.getAppTitle().subscribe((title) => {
    //   this.appTitle = title
    // });
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      }, (error) => {
        console.debug('error', error);
      });
  }

  addCar() {
    const car = {
      color: this.carColor,
      name: this.carName
    };

    this.carsService.addNewCar(car).subscribe((car: Cars) => {
      this.cars.push(car);
    });

    this.clearCarAddingForm();
  }

  clearCarAddingForm() {
    this.carColor = '';
    this.carName = '';
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

  setNewColor(car: Cars) {
    const color = this.getRandomColor();

    this.carsService.editCar(car, color).subscribe((car: Cars) => {
    });
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }
}
