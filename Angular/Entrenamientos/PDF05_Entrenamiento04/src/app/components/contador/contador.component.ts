import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  @Input() numeroInicial: number;
  private isRunning: boolean;

  constructor(){
    this.isRunning = false;
    this.numeroInicial=0;
  }


  comenzar(): void {
    if (!this.isRunning) {
      this.isRunning = true; // Evita múltiples temporizadores
      const interval = setInterval(() => {
        if (this.numeroInicial > 0) {
          this.numeroInicial--;
        } else {
          clearInterval(interval); // Detén el temporizador
          this.isRunning = false; // Permite reiniciar
        }
      }, 1000); // Ejecuta cada 1 segundo
    }
  }
  

}
