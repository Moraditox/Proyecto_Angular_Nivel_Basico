import { Component } from '@angular/core';
import { NgClassComponent } from './components/ng-class-component/ng-class-component';


@Component({
  selector: 'app-root',
  imports: [NgClassComponent],         /*Declarar todos los componentes que utilicemos*/
  templateUrl: './app.html',   
  styleUrl: './app.css'
})
export class App {

}
