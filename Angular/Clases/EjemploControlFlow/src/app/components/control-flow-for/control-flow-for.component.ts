import { Component } from '@angular/core';
import { Iestudiante } from '../../interface/iestudiante';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-for',
  imports: [CommonModule,FormsModule],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.css'
})
export class ControlFlowForComponent {

  arrayEstudiantes:Iestudiante[];


  constructor(){
  
  this.arrayEstudiantes=[
    {id:101, name:"Frodo Bolson",age:50},
    {id:102, name:"Sam  Samsagaz",age:60},
    {id:103, name:"Pipin",age:70},
    {id:104, name:"Merry",age:70},

  ]
}



}
