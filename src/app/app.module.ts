import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { WeatherWidgetModule } from './weather-widget/weather-widget.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , WeatherWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
