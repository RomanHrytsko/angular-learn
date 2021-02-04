import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { CarsComponent } from './components/main/cars/cars.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { CreateComponent } from './components/main/create/create.component';
import { CarComponent } from './components/main/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    CarsComponent,
    CreateComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
