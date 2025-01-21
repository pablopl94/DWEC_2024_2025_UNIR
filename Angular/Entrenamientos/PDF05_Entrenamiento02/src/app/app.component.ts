import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AficionesComponent } from "./components/aficiones/aficiones.component";

@Component({
  selector: 'app-root',
  imports: [ AficionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PDF05_Entrenamiento02';
}
