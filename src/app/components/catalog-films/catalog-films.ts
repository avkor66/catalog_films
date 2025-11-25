import {Component, inject} from '@angular/core';
import {FilmCard} from "../film-card/film-card";
import {FilmService} from "../../services/film.service";
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'app-catalog-films',
  imports: [
    FilmCard
  ],
  templateUrl: './catalog-films.html',
  styleUrl: './catalog-films.scss',
})
export class CatalogFilms {
  filmService = inject(FilmService);

  films: Film[] = []

  constructor() {
    this.filmService.getFilms()
      .subscribe((films) => {
        this.films = films
      });
  }
}
