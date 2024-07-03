import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { filter } from './convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    CommonModule,
    Ng2SearchPipeModule,
    filter,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
