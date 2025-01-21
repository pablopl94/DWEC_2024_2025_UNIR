import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  imports: [],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.css'
})
export class ControlFlowSwitchComponent {

  roles:String[];
  rol:String;

  constructor(){
    this.roles = ["admin","editor","subscriptor","otros"],
    this.rol = this.roles[0]
  }
}
