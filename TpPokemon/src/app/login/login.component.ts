// login.component.ts

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  imports: [NgFor,FormsModule],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor() { }

  onSubmit(): void {
    // Ici, vous pouvez gérer la soumission du formulaire
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Exemple : Validation des identifiants (simulé)
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Connexion réussie !');
      // Redirection vers une autre page ou traitement supplémentaire
    } else {
      console.log('Identifiants invalides !');
      // Afficher un message d'erreur à l'utilisateur
    }
  }
}
