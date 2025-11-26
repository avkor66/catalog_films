import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, filter, map, Observable, switchMap} from "rxjs";
import {FilmService} from "./film.service";
import {Film} from "../interfaces/film.interface";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  filmService = inject(FilmService)
  isVisible$ = new BehaviorSubject<boolean>(false);
  private filmId = new BehaviorSubject<string | undefined>(undefined)

  film$: Observable<Film | undefined> = this.filmId.pipe(
    filter((id): id is string => !!id),
    switchMap(id => this.filmService.getFilmById(id).pipe(
      map(response => {
        if (Array.isArray(response) && response.length > 0) return response[0];
        return undefined;
      })
    ))
  )

  open(event: any) {
    const targetButton = event.currentTarget.dataset as HTMLButtonElement;
    this.filmId.next(targetButton.id)

    this.isVisible$.next(true);
  }
  close() {
    this.isVisible$.next(false);
  }
}
