import { Component, signal } from '@angular/core';
import {FilmCard} from "./components/film-card/film-card";
import {CatalogFilms} from "./components/catalog-films/catalog-films";

@Component({
  selector: 'app-root',
  imports: [
    FilmCard,
    CatalogFilms
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('catalog_films');
}
