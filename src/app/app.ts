import { Component, signal } from '@angular/core';
import {CatalogFilms} from "./components/catalog-films/catalog-films";

@Component({
  selector: 'app-root',
  imports: [
    CatalogFilms
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('catalog_films');
}
