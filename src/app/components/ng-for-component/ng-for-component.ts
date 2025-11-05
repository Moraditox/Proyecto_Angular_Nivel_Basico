import { Component } from '@angular/core';
import { BotonNuestrasCategorias } from '../../models/auxiliars';
import { BotonSimple } from "../boton-simple/boton-simple";

@Component({
  selector: 'app-ng-for-component',
  imports: [BotonSimple],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css',
})
export class NgForComponent {

  boton1: BotonNuestrasCategorias = {
    id: 1,
    urlImagen: 'img/gi.webp',
    descripcion: 'Guitarras y bajos'
  };
  boton2: BotonNuestrasCategorias = {
    id: 2,
    urlImagen: 'img/dr.webp',
    descripcion: 'Baterías y percusión'
  };
  boton3: BotonNuestrasCategorias = {
    id: 3,
    urlImagen: 'img/ta.webp',
    descripcion: 'Teclados'
  };
  boton4: BotonNuestrasCategorias = {
    id: 4,
    urlImagen: 'img/mi.webp',
    descripcion: 'Microfonos'
  };
  boton5: BotonNuestrasCategorias = {
    id: 5,
    urlImagen: 'img/tr.webp',
    descripcion: 'Instrumentos tradicionales'
  };
  boton6: BotonNuestrasCategorias = {
    id: 6,
    urlImagen: 'img/zu.webp',
    descripcion: 'Accesorios'
  };

  botones:Array<BotonNuestrasCategorias> = [
    this.boton1,
    this.boton2,
    this.boton3,
    this.boton4,
    this.boton5,
    this.boton6
  ];

}
