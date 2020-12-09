import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// adresse de l'API
const URL = 'https://swapi.dev/api/people';


@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.page.html',
  styleUrls: ['./star-wars-list.page.scss'],
})
export class StarWarsListPage implements OnInit {

  // Tableau qui va accueillir les données
  public characterList = [];

  // Injection d'une instance de HttpClient dans le constructeur
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Appel de la fonction chargée de récupérer les données depuis l'API
    this.loadData();
  }

  /**
   * Fonction de récupération des données via une requête HTTP
   */
  private loadData() {
    this.http.get(URL)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.characterList = response.results;
        }
      );
  }

}
