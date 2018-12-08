import {Injectable} from "@angular/core";
import {ConsoleService} from "./console.service";

@Injectable()
export class CarsService {
  constructor(private consoleService: ConsoleService) {

  }

  cars: [{ name: String, year: number, isSold: boolean }] = [
    {name: 'Mazda', year: 2017, isSold: false},
    {name: 'Honda', year: 2017, isSold: false},
    {name: 'Ford', year: 2017, isSold: false}
  ];

  addCar(name: string) {
    this.consoleService.log(`car added - ${name}`);

    this.cars.push({
      name, // name: name
      year: 2017,
      isSold: false
    })
  }
}
