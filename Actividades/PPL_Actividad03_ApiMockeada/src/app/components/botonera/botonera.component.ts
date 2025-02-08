import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  usuariosService = inject(UsuarioService);
  @Input() miId!: string;
  @Input() parent: string;
  

  constructor(){
    this.parent = "";
  }

  async deleteUsuario(_id: string) {
    const result = await Swal.fire({
      title:`¿Seguro que quieres eliminar al usuario?`,
      text: `No podras revertir esta accion.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      await this.usuariosService.deleteById(_id);
      Swal.fire({
        title: 'Eliminado',
        text: 'El usuario ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload(); // Apaño temporal, si no se recagar la pagina se queda pillada 
      });
    }
  }

}