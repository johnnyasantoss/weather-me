import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';

import { WeatherWidgetComponent } from './weather-widget.component';

@NgModule({
  imports: [
    CommonModule
    , AlertModule.forRoot()
  ],
  declarations: [
    WeatherWidgetComponent
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class WeatherWidgetModule { }
