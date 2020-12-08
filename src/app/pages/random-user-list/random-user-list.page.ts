
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// L'url de l'API à laquelle on veut se connecter
const URL = 'https://randomuser.me/api';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.page.html',
  styleUrls: ['./random-user-list.page.scss'],
})
export class RandomUserListPage implements OnInit {

  // La liste des utilisateurs
  public userList = [];

  // Injection d'une instance d'HttpClient dans le constructeur
  // stockée dans une variable nommée http
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers(null);
  }

  public loadUsers(even) {

    // Critères de la requête
    const search = new HttpParams()
      .set('results', '20')
      .set('gender', 'female')
      .set('nat', 'es');

    // Requête HTTP, la méthode get retourn un observable
    this.http.get(URL, {params: search})
      // L'observable est résolu par la méthode subscribe
      .subscribe(
        // fonction callback de succès
        (response: any) => {
          console.log(response);
          this.userList = this.userList.concat(response.results);
          if (even) {
            // Fin de chargement des données
            even.target.complete();
          }
        }
      );
  }

}
