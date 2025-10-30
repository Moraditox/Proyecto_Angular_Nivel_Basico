import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

  color:String = "gris";
  colores:Array<String> = ["rojo","amarillo","verde"];

  ponerColor(colorSeleccionado:String){
    console.log("Color seleccionado: " + this.colores[Number(colorSeleccionado)-1]);
    this.color = this.colores[Number(colorSeleccionado)-1];
  }
}