import { TestBed, async } from '@angular/core/testing';

import { WeatherWidgetModule } from "./weather-widget/weather-widget.module";

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        WeatherWidgetModule
      ]
    })
      .compileComponents()
      .catch(err => {
        throw err;
      });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
