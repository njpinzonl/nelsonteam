import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;

  constructor() { }

  ngOnInit() {
    this.lat = -34.600861;
    this.lng = -58.368913;
  }
}
