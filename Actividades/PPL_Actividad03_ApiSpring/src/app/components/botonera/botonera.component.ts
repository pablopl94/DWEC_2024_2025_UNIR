import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  usuariosService = inject(UsuarioService);
  @Input() miUsuario!: IUsuario;
  @Input() miId!: number;
  @Input() parent: string = "";

  async deleteUsuario(id: number) {
    const confirmacion = confirm(`¿Estas seguro de que quieres eliminar el usuario ${this.miId}?`);
    if (confirmacion) {
      await this.usuariosService.deleteById(id);
      alert(`Usuario eliminado correctamente.`);
    }
  }
}