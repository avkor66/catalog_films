import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();

  handled(message: string) {
    this.error$.next(message);
  }

  cleared() {
    this.error$.next('')
  }
}
