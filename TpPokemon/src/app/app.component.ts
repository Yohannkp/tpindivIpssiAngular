import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokemonCreateComponent,LoginComponent,FavoriteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

