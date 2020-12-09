import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

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

  public nextURL: string;
  public prevURL: string;
  public page = 1;

  // Injection d'une instance de HttpClient dans le constructeur
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Appel de la fonction chargée de récupérer les données depuis l'API
    this.loadData(URL);
  }

  /**
   * Fonction de récupération des données via une requête HTTP
   * En passant l'URL en argument
   */
  private loadData(dataUrl) {
    this.http.get(dataUrl)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.characterList = response.results;
          this.nextURL = response.next;
          this.prevURL = response.previous;
        }
      );
  }

  public nextPage() {
    this.loadData(this.nextURL);
    this.page++;
  }

  public previousPage() {
    this.loadData(this.prevURL);
    this.page--;
  }

  public getId(item) {
    const urlParts = item.url.split('/');
    return urlParts[urlParts.length - 2];
  }

}
