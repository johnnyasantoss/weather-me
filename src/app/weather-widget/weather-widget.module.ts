import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherWidgetComponent } from './weather-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherWidgetComponent
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class WeatherWidgetModule { }
