export class GeolocationResult {
    longitude: number;
    latitude: number;

    constructor(position: Position) {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
    }
}
