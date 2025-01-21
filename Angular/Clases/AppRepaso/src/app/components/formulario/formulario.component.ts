import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  arrayUsuarios:any[];
  nuevoUsuario:any;

  constructor(){
    
    this.arrayUsuarios=[] ,
    this.nuevoUsuario = {
      nombre: "",
      apellidos: "",
      email: "",
      edad: undefined,
      telefono: "",
    };
  }

  guardardatos(): void {
    this.arrayUsuarios.push({ ...this.nuevoUsuario });
    this.nuevoUsuario = {
      nombre: "",
      apellidos: "",
      email: "",
      edad: 0,
      telefono: "",
    };
  }



}
