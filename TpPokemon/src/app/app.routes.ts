import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { LoginComponent } from './login/login.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


export const routes: Routes = [
    { path: '', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'create', component: PokemonCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorite', component: FavoriteListComponent },
  
  ];

  