import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-full-car-info',
  templateUrl: './full-car-info.component.html',
  styleUrls: ['./full-car-info.component.css']
})
export class FullCarInfoComponent implements OnInit {
  @Input()
  car;


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
