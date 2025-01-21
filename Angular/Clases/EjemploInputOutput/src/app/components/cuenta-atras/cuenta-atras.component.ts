import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  imports: [],
  templateUrl: './cuenta-atras.component.html',
  styleUrl: './cuenta-atras.component.css'
})
export class CuentaAtrasComponent {


  @Input() numeroInicial: number = 13;
  @Input() color: string = "gold";

  @Output() cuentaAtrasTerminada: EventEmitter<string> = new EventEmitter;
  

  interval:any;
  private isRunning: boolean = false;

  comenzar(): void {
    if (!this.isRunning) {
      this.isRunning = true; // Evita múltiples temporizadores
      this.interval = setInterval(() => {
        if (this.numeroInicial > 0) {
          this.numeroInicial--;
        } else {
          clearInterval(this.interval); // Detén el temporizador
          this.isRunning = false; // Permite reiniciar
          this.cuentaAtrasTerminada.emit(this.color);
        }
      }, 1000); // Ejecuta cada 1 segundo
    }
  }
}