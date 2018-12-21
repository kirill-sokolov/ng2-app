import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {delay} from 'rxjs/operator/delay';

@Injectable()
export class MyCarsService {

  constructor(private http: HttpClient) {

  }

  getAppTitle() {
    return this.http.get('http://localhost:3000/title')
      .pipe(map((data) => data['value']));
  }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.get('http://localhost:3000/cars', {headers: headers});
  }

  addNewCar(car: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.post('http://localhost:3000/cars', car, {headers})
  }

  editCar(car: any, color) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
  }
}
