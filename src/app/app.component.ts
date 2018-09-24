import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Looking for the current location';

  public latitudeNumber: number;
  public longitudeNumber: number;
  public zoom = 15;

  startMap(ev) {
    if (ev === 'zero') {
      this.currentLocation();
    }
  }
  currentLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.latitudeNumber = position.coords.latitude;
          this.longitudeNumber = position.coords.longitude;
        },
        error => this.locationDefault()
      );
    } else {
      this.locationDefault();
    }
  }

  locationDefault() {
    this.latitudeNumber = -34.600861;
    this.longitudeNumber = -58.368913;
  }
}
