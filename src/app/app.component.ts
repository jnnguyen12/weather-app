import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { hour } from './day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private weatherService: WeatherService) {
  }

  title = 'hack';
  d = new Date(); //today's date

  selected: number = 0;
  currentTab : String = "daily";

  search_error: boolean = false;
  temp: number = 0;
  search_visible: boolean = false;

  week: hour[][] = [];

  see() 
  {
    this.search_visible = true;
  }

  submit(value: string) {
     if (value.length < 4 || Number(value) < 501 || Number(value) > 99950) {
        this.search_error = true;
        return;
     }
  }

  switchTabs(curr : string) {
    this.currentTab = curr;
  }

  getTemp() {
    this.weatherService.getTemp().subscribe(temp => 
      {
        let day: hour[] = [];
        let i = 0;

        // alert(temp.data.length);
        for (; i < temp.data.length; i++) {
          let hour = {} as hour;
          hour.temp = Math.floor(temp.data[i].temp);
          hour.wind_spd = Math.floor(temp.data[i].wind_spd);
          hour.timestamp_local = temp.data[i].timestamp_local;
          day.push(hour);

          if (i == 24 - this.d.getHours() - 1) {
            this.week.push(day); // day 1
          }
        }
        // TODO FIX ME FOR A WEEK VALUE
        this.week.push(day);
        // alert("success");
      }  
    );
    
  }

  ngOnInit() {
    this.getTemp();
  }

}
