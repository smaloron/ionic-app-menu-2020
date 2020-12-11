import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { StarWarsListPage } from '../star-wars-list/star-wars-list.page';

export const URL = 'https://swapi.dev/api/planets';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.page.html',
  styleUrls: ['./planet-list.page.scss'],
})
export class PlanetListPage implements OnInit {
  planetList = [];

  constructor(private http: HttpClient, public starWarsService: StarWarsService) { }

  ngOnInit() {
    this.http.get(URL).subscribe((response: any) => {
      this.planetList = response.results;
    });
  }

}
