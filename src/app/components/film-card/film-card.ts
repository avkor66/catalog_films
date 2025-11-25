import {Component, Input} from '@angular/core';
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  @Input() film!: Film;
}
