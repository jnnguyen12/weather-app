import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  // private url: string = 'http://api.weatherbit.io/v2.0/forecast/hourly?key=63905b681ef44e068d0331081d44c8e8&postal_code=50010&hours=168';
  private url: string = 'http://api.weatherbit.io/v2.0/forecast/hourly?key=63905b681ef44e068d0331081d44c8e8&units=I&postal_code=50014&hours=1';
  // private url: string = 'https://api.weatherbit.io/v2.0/current?key=63905b681ef44e068d0331081d44c8e8&postal_code=50010'
  // private url: string = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely'
  // private url: string = 'https://ir-example.mir.prod.reco.microsoft.com/Reco/V1.0/New?modeling=adw&Count=5'
  // private url: string =  'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }


  data = {  
    "data":[  
       {  
          "wind_cdir":"NE",
          "rh":59,
          "pod":"d",
          "lon":-78.63861,
          "pres":1006.6,
          "timezone":"America\/New_York",
          "ob_time":"2017-08-28 16:45",
          "country_code":"US",
          "clouds":75,
          "vis":10,
          "wind_spd":6.17,
          "gust": 8,
          "wind_cdir_full":"northeast",
          "app_temp":24.25,
          "state_code":"NC",
          "ts":1503936000,
          "h_angle":0,
          "dewpt":15.65,
          "weather":{  
             "icon":"c03d",
             "code": 803,
             "description":"Broken clouds"
          },
          "uv":2,
          "aqi":45,
          "station":"CMVN7",
          "sources": ["rtma", "CMVN7"],
          "wind_dir":50,
          "elev_angle":63,
          "datetime":"2017-08-28:17",
          "precip":0,
          "ghi":444.4,
          "dni":500,
          "dhi":120,
          "solar_rad":350,
          "city_name":"Raleigh",
          "sunrise":"10:44",
          "sunset":"23:47",
          "temp":24.19,
          "lat":35.7721,
          "slp":1022.2
       }
    ]
 }
  getTemp(): Observable<any>{
    return this.http.get(this.url);
  }


}
