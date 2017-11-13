import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { WeatherWidgetComponent } from './weather-widget.component';

// services
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , AlertModule.forRoot()
  ]
  , declarations: [
    WeatherWidgetComponent
  ]
  , exports: [
    WeatherWidgetComponent
  ]
  , providers: [
    GeolocationService
  ]
})
export class WeatherWidgetModule { }
