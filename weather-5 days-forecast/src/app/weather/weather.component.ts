import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'wp-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather:Weather;
  constructor(private weatherSer:WeatherService, private route:ActivatedRoute) { }
  weatherClass:Weather;
  location:any = {};
  ngOnInit() {
    this.route.data.subscribe(
      (data:{weatherClass:Weather}) => {
        this.weatherClass = data.weatherClass;
      }
    )
  }

  onSubmit(weatherForm: NgForm){
    this.weatherSer.otherWeather(weatherForm.value.city).subscribe(
      (data) => {
        this.weatherClass = new Weather(data.name, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.weather[0].icon);
        console.log(this.weatherClass);
      }
    )
  }
}
