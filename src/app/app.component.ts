import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertadorService } from './alertador.service';
import { ApiService } from './api.service';
import { MensajeroService } from './mensajero.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Mi primera app con Angular';
  textoInput: string;
  textoBotonPulsado: string;
  botonPulsado: boolean = false;
  tareaPendienteDeAnadir: string;
  tareas: string[] = [];

  constructor(private mensajero: AlertadorService) {}

  mostrarTexto() {
    this.textoBotonPulsado = `El botón ha sido pulsado con el valor ${this.textoInput}`;
    this.botonPulsado = !this.botonPulsado;
  }

  anadirTareaALaLista() {
    this.tareas.push(this.tareaPendienteDeAnadir);
    this.mensajero.mensaje(this.tareaPendienteDeAnadir);
  }
}
