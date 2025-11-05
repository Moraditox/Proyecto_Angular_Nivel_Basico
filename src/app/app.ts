import { Component } from '@angular/core';
import { NgForComponent } from './components/ng-for-component/ng-for-component';


@Component({
  selector: 'app-root',
  imports: [NgForComponent],         /*Declarar todos los componentes que utilicemos*/
  templateUrl: './app.html',   
  styleUrl: './app.css'
})
export class App {

}
