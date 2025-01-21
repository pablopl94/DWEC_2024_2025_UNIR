import { Component } from '@angular/core';
import { GaleriaComponent } from "./components/galeria/galeria.component";

@Component({
  selector: 'app-root',
  imports: [ GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PDF05_Entrenamiento03';
}
