import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { elementAt } from 'rxjs';
import { IAficion } from '../../interface/iaficion';

@Component({
  selector: 'app-aficiones',
  imports: [CommonModule, FormsModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {


  //PROPIEDADES
  arrayAficiones: IAficion[]
  newAficion : IAficion;


  //CONSTRUCTOR
  constructor() {

    this.arrayAficiones = [];
    this.newAficion= {
      aficion: "",
      nombre: "",
      nivel: ""
    }

  }

  //METODOS
    guardarDatos():void {
    
    this.arrayAficiones.push(this.newAficion);
    //reiniciamos el objeto
    this.newAficion = {
      aficion:"",
      nombre:""
      }
    }

    cargarDatos():string{

      let html: string ="";

        this.arrayAficiones.forEach(element => { 
          html +=         
          `<div class="list-item">
          <strong class="aficion">${element.aficion}</strong> - 
          <span class="nombre">${element.nombre}</span> - 
          <span class="nivel">(${element.nivel})</span>
          </div>`
        });

      return html;
    }
    
}