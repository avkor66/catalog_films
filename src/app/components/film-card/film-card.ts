import {Component, Input} from '@angular/core';
import {Film} from "../../interfaces/film.interface";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  @Input() film!: Film;
  constructor(public modalService: ModalService) {}
}
