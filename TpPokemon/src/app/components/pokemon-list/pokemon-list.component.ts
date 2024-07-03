import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemons';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FavoriteService } from '../../services/favorite.service';
import { FavoriteListComponent } from '../../favorite-list/favorite-list.component';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  imports: [NgFor,FavoriteListComponent,FormsModule],
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent {
  constructor(private http: HttpClient,private favoriteService: FavoriteService, private pokemonService: PokemonService){
    //this.loadPost()
    this.fetchPokemons()
  }
  searchText: any;
  title = 'TpPokemon';
  pokemons: Pokemon[] = [];
  favorites: any[] = [];
  posts: any[] = [];


  fetchPokemons(): void {
    this.pokemonService.getPokemons().subscribe(
      (data) => {
        this.pokemons = data.results;
        console.log('Pokemons:', this.pokemons);
      },
      (error) => {
        console.error('Error fetching Pokemons:', error);
        // Gérez l'erreur ici
      }
    );
  }

  addToFavorites(pokemon: any): void {
    this.favorites = this.favoriteService.getFavorites();
    if (this.favorites.find(fav => fav.name === pokemon.name)) {
      alert("Ce pokemon existe déja dans tes favoris")
    }else{
      alert("Pokémon : "+pokemon.name+" ajouter aux favoris")
    this.favoriteService.addFavorite(pokemon);
    console.log(`Pokémon ${pokemon.name} ajouté aux favoris`);
    }
    
  }
}
