import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL } from '../star-wars-list/star-wars-list.page';

@Component({
  selector: 'app-swapi-details',
  templateUrl: './swapi-details.page.html',
  styleUrls: ['./swapi-details.page.scss'],
})
export class SwapiDetailsPage implements OnInit {

  public character = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // Récupération de l'id du personnage passé en paramètre
    const id = this.route.snapshot.paramMap.get('id');
    // Chargement des infos d'un personnage
    this.loadCharacter(id);
  }

  private loadCharacter(id) {
    const detailUrl = URL + '/' + id;
    this.http.get(detailUrl).subscribe((response) => console.log(response));
  }

}
