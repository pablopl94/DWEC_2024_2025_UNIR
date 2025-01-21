import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AficionesComponent } from "./components/aficiones/aficiones.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AficionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAficionesLab';
}
