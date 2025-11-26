import {Component, inject, OnInit} from '@angular/core';
import {FilmCard} from "../film-card/film-card";
import {FilmService} from "../../services/film.service";
import {Film} from "../../interfaces/film.interface";
import {Observable, tap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {ErrorHandler} from "../error-handler/error-handler";
import {FormsModule} from "@angular/forms";
import {FilterFilmsPipe} from "../../pipes/filter-films-pipe";
import {Modal} from "../modal/modal";
import {ModalCard} from "../modal-card/modal-card";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-catalog-films',
  imports: [
    FilmCard,
    AsyncPipe,
    ErrorHandler,
    FormsModule,
    FilterFilmsPipe,
    Modal,
    ModalCard
  ],
  templateUrl: './catalog-films.html',
  styleUrl: './catalog-films.scss',
})
export class CatalogFilms implements OnInit {
  filmService = inject(FilmService);

  seek = ''

  constructor(public modalService: ModalService) {}

  films$: Observable<Film[]> | undefined;
  ngOnInit() {
    this.films$ = this.filmService.getFilms()
  }
}
