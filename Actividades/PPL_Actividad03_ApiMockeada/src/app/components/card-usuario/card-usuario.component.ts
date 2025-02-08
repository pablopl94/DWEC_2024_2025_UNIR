import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-card-usuario',
  imports: [BotoneraComponent],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {

  @Input() miUsuario!: IUsuario;

}
