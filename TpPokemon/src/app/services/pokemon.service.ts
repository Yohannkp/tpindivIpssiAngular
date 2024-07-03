import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // Récupérer tous les Pokémon
  getPokemons(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${API_URL}?offset=${offset}&limit=${limit}`);
  }

  // Récupérer un Pokémon par son ID
  getPokemon(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  // Créer un nouveau Pokémon
  createPokemon(pokemon: any): Observable<any> {
    return this.http.post(API_URL, pokemon, httpOptions);
  }

  // Mettre à jour un Pokémon existant
  updatePokemon(id: number, pokemon: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, pokemon, httpOptions);
  }

  // Supprimer un Pokémon
  deletePokemon(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, httpOptions);
  }
}
