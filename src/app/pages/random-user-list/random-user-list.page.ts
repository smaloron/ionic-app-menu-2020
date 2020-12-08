
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// L'url de l'API à laquelle on veut se connecter
const URL = 'https://randomuser.me/api?results=10';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.page.html',
  styleUrls: ['./random-user-list.page.scss'],
})
export class RandomUserListPage implements OnInit {

  // Un observable qui permettra de récupérer les données
  public userRequest: Observable<any>;

  // Injection d'une instance d'HttpClient dans le constructeur
  // stockée dans une variable nommée http
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers();
  }

  public loadUsers() {
    // Requête HTTP, la méthode get retourne un observable
    this.userRequest = this.http.get(URL);
  }

}
