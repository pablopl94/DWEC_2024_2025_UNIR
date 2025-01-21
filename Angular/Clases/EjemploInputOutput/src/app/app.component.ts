import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentaAtrasComponent } from "./components/cuenta-atras/cuenta-atras.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CuentaAtrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploInputOutput';

  primerContador = 3;
  segundoContador = 5;
  tercerContador = 10;

  color: string = "";
  arrColores: string[] = ['red', 'blue', 'gold', 'green'];


  terminar($event: string) {
    this.color = `background-color:${$event}`;
  }
}
