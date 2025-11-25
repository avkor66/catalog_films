import {Component, inject} from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-error-handler',
  imports: [
    AsyncPipe
  ],
  templateUrl: './error-handler.html',
  styleUrl: './error-handler.scss',
})
export class ErrorHandler {
  errorService = inject(ErrorService);
}
