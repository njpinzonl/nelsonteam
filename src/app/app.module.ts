import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { MapComponent } from './map/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { TimerService } from './services/timer.service';
import { DisplayComponent } from './display/display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MapComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1GdqOzdCaEkB-bMOs7QroSmPmoChL-rk'
    })
  ],
  providers: [
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
