import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  hasntGeoAccess: boolean;
  searchText: string;

  constructor(private geoService: GeolocationService) {
  }

  ngOnInit(): void {
    this.hasntGeoAccess = this.geoService.checkCompatibility();
    this.geoService.getGeolocationAsync()
      .then((result) => {
        this.searchText = `Latitude: ${result.latitude} Longitude: ${result.longitude}`;
      });
  }
}
