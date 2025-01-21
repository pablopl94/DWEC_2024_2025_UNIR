import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ITrabajador } from '../../interface/itrabajador';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {

  arrayTrabajadores:ITrabajador[];

  constructor(){
    this.arrayTrabajadores = [];
    }

  //Funcion que se ejectua en el submit donde recogemos la informacion
  //del formulario
  getDataForm(formTrabajador: NgForm) {
    let trabajador:ITrabajador = formTrabajador.value as ITrabajador;
    this.arrayTrabajadores.push(trabajador);
    
      formTrabajador.resetForm();
      console.log(trabajador);

    }

  }
