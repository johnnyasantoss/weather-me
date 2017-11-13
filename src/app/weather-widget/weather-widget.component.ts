import { Component } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  hasntGeoAccess = false;

  constructor() { }

}
