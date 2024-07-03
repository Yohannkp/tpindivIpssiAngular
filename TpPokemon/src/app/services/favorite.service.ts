// favorite.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: any[] = [];

  constructor() { 

  }

  getFavorites(): any[] {
    return this.favorites;
  }

  addFavorite(pokemon: any): void {
    this.favorites.push(pokemon);
    console.log(this.favorites)
  }

}
