import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-info'
  , templateUrl: './day-info.component.html'
  , styleUrls: ['./day-info.component.css']
})
export class DayInfoComponent {
  @Input() weather: DayWeather;
}

class DayWeather {
  temperature: string;
}
