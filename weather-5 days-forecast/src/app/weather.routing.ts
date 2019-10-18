import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ResolveLocationService } from './resolve-location.service';

const WEATHER_ROUTER:Routes=[
  {path: '', component: WeatherComponent, resolve:{weatherClass: ResolveLocationService}},
  {path: 'forecast', component: ForecastComponent}
]

export const weatherRouting:ModuleWithProviders=RouterModule.forRoot(WEATHER_ROUTER)
