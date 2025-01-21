import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./components/contador/contador.component";

@Component({
  selector: 'app-root',
  imports: [ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador:number;

  constructor() {
    this.contador=0;
  }
}
