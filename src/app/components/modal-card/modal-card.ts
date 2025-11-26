import {Component, inject, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Film} from "../../interfaces/film.interface";

@Component({
  selector: 'app-modal-card',
  imports: [
    AsyncPipe
  ],
  templateUrl: './modal-card.html',
  styleUrl: './modal-card.scss',
})
export class ModalCard implements OnInit {
  modalService = inject(ModalService);

  filmDetail$: Observable<Film | undefined> = this.modalService.film$;

  ngOnInit() {
  }
}
