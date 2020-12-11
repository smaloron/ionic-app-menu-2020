import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, circle } from 'leaflet';

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
    this.initMap([33.6396965, -84.4304574]);
  }

  initMap(coords) {
    // Instanciation de la carte
    this.map = new Map('mapView');
    this.map.setView(coords, 10);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
      .addTo(this.map);
    
    // Ajout d'un marqueur
    circle(coords, { color: 'green', radius: 10 }).addTo(this.map)
      .bindPopup('<p>Vous êtes ici !!</p>');
  }

}
