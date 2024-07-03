import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail(): void {
    const id = +!this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
    });
  }
}
