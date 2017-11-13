import { TestBed, inject } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be created', inject([GeolocationService], (service: GeolocationService) => {
    expect(service).toBeTruthy();
  }));

  it('"checkCompatibility" should return a bool'
    , inject([GeolocationService]
      , (service: GeolocationService) => {
        expect('checkCompatibility' in service).toBeTruthy();

        const result = service.checkCompatibility();
        expect(typeof result).toBe('boolean');
      })
  );

  it('"getGeolocationAsync" should return a Promise'
    , inject([GeolocationService]
      , (service: GeolocationService) => {
        expect('getGeolocationAsync' in service).toBeTruthy();

        const result = service.getGeolocationAsync();
        expect(result instanceof Promise).toBeTruthy();
      })
  );
});
