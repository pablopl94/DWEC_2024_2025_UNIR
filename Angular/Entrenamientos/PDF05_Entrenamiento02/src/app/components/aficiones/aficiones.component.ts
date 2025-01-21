import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPersona} from'../../interface/IPersona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aficiones',
  imports: [FormsModule,CommonModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {

  arrayAficiones:IPersona[];
  persona:IPersona;

  constructor(){
    this.arrayAficiones = [];
    this.persona = {
      nombre: "",
      aficion:""
    } 
  }

  guardarPersona(){
    this.arrayAficiones.push(this.persona)
    this.persona = {
      nombre: "",
      aficion:""
    } 
  }

}
