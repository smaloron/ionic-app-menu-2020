import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
// Import de l'URL de l'API depuis la page de la liste des personnages
import { URL } from '../star-wars-list/star-wars-list.page';

@Component({
  selector: 'app-swapi-details',
  templateUrl: './swapi-details.page.html',
  styleUrls: ['./swapi-details.page.scss'],
})
export class SwapiDetailsPage implements OnInit {

  public character = {
    name: null, height: null, mass: null, films: [], homeworld: { name: null}
  };

  constructor(
    // injection de l'objet ActivatedRoute pour récupérer
    // les paramètres passé à la route
    private route: ActivatedRoute,
    // Injection de l'objet HttpClient
    // pour effectuer une requête HTTP
    private http: HttpClient) { }

  ngOnInit() {
    // Récupération de l'id du personnage passé en paramètre
    const id = this.route.snapshot.paramMap.get('id');
    // Chargement des infos d'un personnage
    this.loadCharacter(id);
  }

  private loadCharacter(id) {
    const detailUrl = URL + '/' + id;
    this.http.get(detailUrl).subscribe((response: any) => {
      console.log(response);
      // affectation de la réponse à la variable character
      this.character = response;

      // Récupération des informations concernant la planète
      this.http.get(response.homeworld).subscribe(
        (homeworld: any) => {
          this.character.homeworld = homeworld;
        }
      );

      // Tableau des appels à l'API pour récupérer la liste des films
      const apiCalls = [];
      for (const url of response.films) {
        apiCalls.push(this.http.get(url));
      }
      // Résolution en une fois de tous les appels à l'API
      // pour récupérer la liste des films
      forkJoin(apiCalls).subscribe(
        (res: any[]) => {
          this.character.films = res;
        }
      );
    });
  }



  public getDate(date: string) {
    return new Date(date);
  }

}
