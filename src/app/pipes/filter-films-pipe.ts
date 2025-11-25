import { Pipe, PipeTransform } from '@angular/core';
import {Film} from "../interfaces/film.interface";

@Pipe({
  name: 'filterFilms'
})
export class FilterFilmsPipe implements PipeTransform {

  transform(films: Film[], search: string): Film[] {
    return films.filter((film: Film) => film.title.toLowerCase().includes(search.toLowerCase()));
  }

}
