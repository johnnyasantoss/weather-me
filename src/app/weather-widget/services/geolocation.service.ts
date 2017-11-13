import { Injectable } from '@angular/core';

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
        , (error) => {
          // TODO: Finish this
        }
        , options
      );
    });
  }

}

class GeolocationResult {
  longitude: number;
  latitude: number;

  constructor(position: Position) {
    this.longitude = position.coords.longitude;
    this.latitude = position.coords.latitude;
  }
}
