import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  nombre:string;
  apellidos:string;
  edad:number;

  texto:string;

  constructor(){
    this.nombre="Pablo";
    this.apellidos="Prieto López";
    this.edad= 30 ;
    this.texto=""
  }

  nombreCompleto():string {
    return `${this.nombre} ${this.apellidos}`
  }

  cargarTexto(event:any):void {
    this.texto = event.target.value;
  }
}
