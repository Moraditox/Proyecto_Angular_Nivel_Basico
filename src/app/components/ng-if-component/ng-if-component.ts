import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  imports: [],
  templateUrl: './ng-if-component.html',
  styleUrl: './ng-if-component.css',
})
export class NgIfComponent {

  esVisible: boolean = true;
  mostrarImagen: string = "Ocultar Imagen";

  toggle(): void {
    this.esVisible = !this.esVisible;
    this.mostrarImagen = this.esVisible ? "Ocultar Imagen" : "Mostrar Imagen";
  }
}
