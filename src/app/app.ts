import { Component, signal } from '@angular/core';
import {FilmCard} from "./components/film-card/film-card";

@Component({
  selector: 'app-root',
  imports: [
    FilmCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('catalog_films');
}
