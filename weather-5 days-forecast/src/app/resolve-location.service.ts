import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { WeatherService } from './weather.service';

@Injectable()
export class ResolveLocationService implements Resolve<any>{
  constructor(private weatherSer:WeatherService) { };

  resolve(){
    return this.weatherSer.currentLocation();
  }
}
