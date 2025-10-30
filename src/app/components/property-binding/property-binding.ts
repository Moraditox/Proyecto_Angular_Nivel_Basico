import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {

  saludo:String = "!Hola! Mundo";

  miClase:String = "titular";

  urlImagen:String = "img/manzana.jpg"
  altTexto:String = "una manzana";

  estadoBoton:boolean = false;
}
