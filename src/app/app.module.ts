import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FullCarInfoComponent} from './components/full-car-info/full-car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    FullCarInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'link/home', component: HomeComponent
      },
      {
        path: 'link/cars', component: CarsComponent, children: [
          {
            path: ':id', component: FullCarInfoComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
