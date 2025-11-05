import { Component, Input } from '@angular/core';
import { BotonNuestrasCategorias } from '../../models/auxiliars';

@Component({
  selector: 'app-boton-simple',
  imports: [],
  templateUrl: './boton-simple.html',
  styleUrl: './boton-simple.css',
})
export class BotonSimple {
  @Input() datos:BotonNuestrasCategorias;
}
