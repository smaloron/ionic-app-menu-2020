import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Instanciation de la carte
    this.map = new Map('mapView');
    this.map.setView([33.6396965, -84.4304574], 10);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
      .addTo(this.map);
  }

}
