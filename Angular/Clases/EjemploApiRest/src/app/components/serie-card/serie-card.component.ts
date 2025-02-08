import { Component, Input } from '@angular/core';
import { ISerie } from '../../interfaces/ISerie';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-serie-card',
  imports: [BotoneraComponent],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {
  @Input() miSerie!:ISerie;


  constructor(){

  }
}
