import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlflowComponent } from "./components/controlflow/controlflow.component";
import { ControlFlowForComponent } from "./components/control-flow-for/control-flow-for.component";
import { ControlFlowSwitchComponent } from "./components/control-flow-switch/control-flow-switch.component";

@Component({
  selector: 'app-root',
  imports: [ControlflowComponent, ControlFlowForComponent, ControlFlowSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploControlFlow';
}
