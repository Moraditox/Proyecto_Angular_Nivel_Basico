import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  imports: [],
  templateUrl: './one-way-binding.html',
  styleUrl: './one-way-binding.css',
})
export class OneWayBinding {

  titular:string = "Deep Purple";

  subtitular:string = "Este es un subtitulo";

  edad:number = 123;
}
