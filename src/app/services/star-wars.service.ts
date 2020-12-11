import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor() { }

  public getId(item) {
    const urlParts = item.url.split('/');
    return urlParts[urlParts.length - 2];
  }
}
