import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Weather } from './weather';

@Injectable()
export class WeatherService {
  private weather:Weather[] = [] ;
  weatherClass:Weather;
  location;
  constructor(private http:Http) { }

  currentLocation(){
    //create promise to resolve later
    //
    return new Promise((res, rej)=>{
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        console.log(`lat ${lat} and lon ${lon}`);
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=a242f35f03d360d60c8d02c044d902e1&lat=${lat}&lon=${lon}&units=imperial`).map((response:Response) => response.json()).toPromise().then(
          (data) => {
            this.weatherClass = new Weather(data.name, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.weather[0].icon);
            res(this.weatherClass);
            return this.weatherClass;
          }
        );
      })
    })

    // return this.weather;
  }

  otherWeather(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=a242f35f03d360d60c8d02c044d902e1&q=${city}&units=imperial&cnt=10`).map((response:Response) => response.json());
  }

  otherForecast(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=a242f35f03d360d60c8d02c044d902e1&units=imperial`).map((response:Response) => response.json())
  }

}
