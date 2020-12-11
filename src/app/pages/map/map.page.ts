import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, circle } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: Map;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('début de géoloc');
    this.geolocation.getCurrentPosition()
      .then(response => {
        const coords = [response.coords.latitude, response.coords.longitude];
        this.initMap(coords);
      });
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
