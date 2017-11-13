import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

// services
import { GeolocationService } from './services/geolocation.service';

import { WeatherWidgetComponent } from './weather-widget.component';
import { DayInfoComponent } from './day-info/day-info.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , AlertModule.forRoot()
  ]
  , declarations: [
    WeatherWidgetComponent,
    DayInfoComponent
  ]
  , exports: [
    WeatherWidgetComponent
  ]
  , providers: [
    GeolocationService
  ]
})
export class WeatherWidgetModule { }
