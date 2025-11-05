import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style-component',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style-component.html',
  styleUrl: './ng-style-component.css',
})
export class NgStyleComponent {

  // Variables para ngStyle
  colorFondo: string = '#000000';
  colorTexto: string = 'yellow';
  stock: boolean = false;
  miPadding: boolean = true;
  bgColor: string = 'grey';
  tamanioTexto: number = 24;
  alturaCaja: number = 200;
  anchoCaja: number = 200;

  metodoSumarTexto(): void {
    this.tamanioTexto += 1;
  }
  metodoRestarTexto(): void {
    this.tamanioTexto -= 1;
  }
}
