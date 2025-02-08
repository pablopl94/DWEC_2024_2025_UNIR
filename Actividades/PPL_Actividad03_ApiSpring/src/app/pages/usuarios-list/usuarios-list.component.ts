import { Component, effect, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CardUsuarioComponent } from "../../components/card-usuario/card-usuario.component";

@Component({
  selector: 'app-usuarios-list',
  imports: [CardUsuarioComponent],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent  {

  usuarioService = inject(UsuarioService);
  arrayUsuarios = this.usuarioService.getAll(); // Signal Reactivo

  constructor() {
    // Efecto para reaccionar automáticamente a cambios en el signal
    effect(() => {
      console.log('Usuarios actualizados:', this.arrayUsuarios());
    });
  }
}
