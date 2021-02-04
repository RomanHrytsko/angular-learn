import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../../services';
import {ICar} from '../../../interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) {
  }

  cars: ICar[];

  ngOnInit(): void {

    this.carsService.getAllCars().subscribe(value => this.cars = value);

  }

}
