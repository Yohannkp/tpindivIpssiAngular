import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Pokemon } from "../../models/pokemons";
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgFor,FormsModule],
  standalone: true,
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})


export class PokemonCreateComponent {
  constructor(private http: HttpClient, private pokemonService: PokemonService){
    //this.loadPost()
    this.fetchPokemons()
  }
  title = 'TpPokemon';
  pokemons: Pokemon[] = [];
  pokemon: any = {
    name: '',
    type: ''
  };
  
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


  onSubmit(): void {
    this.pokemonService.createPokemon(this.pokemon).subscribe(
      (response) => {
        console.log('Nouveau Pokémon créé avec succès:', response);
        // Gérer la réponse de l'API ou rediriger l'utilisateur
      },
      (error) => {
        console.error('Erreur lors de la création du Pokémon:', error);
        // Gérer l'erreur ici
      }
    );
  }
}
