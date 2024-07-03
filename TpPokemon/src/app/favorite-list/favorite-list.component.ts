// favorite-list.component.ts

import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service'
import { NgFor } from '@angular/common';
import { Pokemon } from '../models/pokemons';

@Component({
  imports: [NgFor],
  standalone: true,
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor(private favoriteService: FavoriteService) { }
  favorites: any[] = [];
  pokemons: Pokemon[] = this.favoriteService.getFavorites();

  

  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

  
}
