import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [CommonModule, FormsModule],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {

  edad:number ;
  newEdad:number;

  constructor(){
    this.edad = 0;
    this.newEdad=0;
  }

  guardarEdad(): void {
  
      this.edad = this.newEdad; // Actualiza edad con el valor de newEdad
      this.newEdad = 0; // Reinicia el campo newEdad después de guardar
  }

}
