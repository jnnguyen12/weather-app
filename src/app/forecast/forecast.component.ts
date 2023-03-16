import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { hour } from '../day';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  @Input() week?: hour[][];
  days : string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  d = new Date();
  today: number = this.d.getDay();
  curDay: number = this.today;
  curSelection: hour[] = [];

  switchDays(day: number) {
    this.curDay = day;
  }

}
