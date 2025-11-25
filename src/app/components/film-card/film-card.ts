import {Component, inject} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {JsonPipe} from "@angular/common";
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'app-film-card',
  imports: [
    JsonPipe
  ],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {

}
