import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajeroService {
  constructor() {}

  mensaje(texto) {
    console.log(texto);
  }
}
