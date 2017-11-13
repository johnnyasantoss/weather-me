import { Injectable } from '@angular/core';
import { GeolocationResult } from '../model/geolocationresult';

@Injectable()
export class GeolocationService {

  constructor() { }

  checkCompatibility(): boolean {
    return 'geolocation' in navigator;
  }

  getGeolocationAsync(): Promise<GeolocationResult> {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 20 * 1000,
      maximumAge: 30 * 1000
    };

    return new Promise<GeolocationResult>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(new GeolocationResult(position))
        , reject
        , options
      );
    });
  }

}

