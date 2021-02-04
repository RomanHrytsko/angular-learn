import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {URL} from '../config';
import {ICar} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(URL.cars);
  }

  postCar(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(URL.cars, car);
  }
}
