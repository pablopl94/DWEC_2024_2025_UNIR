import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimercomponenteComponent } from "./components/primercomponente/primercomponente.component";
import { SegundocomponenteComponent } from "./components/segundocomponente/segundocomponente.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimercomponenteComponent, SegundocomponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SegundaClase';
}
