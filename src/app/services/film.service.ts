import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Film} from "../interfaces/film.interface";

@Injectable({providedIn: 'root'})
export class FilmService {
  http = inject(HttpClient);

  baseUrl: string = "http://localhost:3000";

  getFilms() {
    return this.http.get<Film[]>(this.baseUrl + "/films");
  }
}