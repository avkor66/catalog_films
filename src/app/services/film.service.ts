import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Film} from "../interfaces/film.interface";
import {catchError, delay, retry, throwError} from "rxjs";
import {ErrorService} from "./error.service";

@Injectable({providedIn: 'root'})
export class FilmService {
  http = inject(HttpClient);
  errorService = inject(ErrorService);

  baseUrl: string = "http://localhost:3000";

  getFilms() {
    return this.http.get<Film[]>(this.baseUrl + "/films")
      .pipe(
        delay(300),
        retry(3),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    this.errorService.handled(error.message)
    return throwError(() => error.message);
  }
}