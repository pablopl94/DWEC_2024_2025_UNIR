import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CardUsuarioComponent } from "../../components/card-usuario/card-usuario.component";
import { IUsuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-usuarios-list',
  imports: [CardUsuarioComponent],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent implements OnInit {

  usuarioService = inject(UsuarioService);
  listaUsuarios: IUsuario[] = []; 
  paginaActual: number;
  usuariosPorPagina: number;
  totalPaginas: number;

  constructor() {
    this.paginaActual = 1; 
    this.usuariosPorPagina = 4; 
    this.totalPaginas = 1; 
  }

  async ngOnInit() {
    try {
      this.listaUsuarios = await this.usuarioService.getAll();
      this.calcularTotalPaginas(); 
    } catch (error) {
      console.error("Error al cargar la API:", error);
    }
  }

  // Metodo para calcular todas las paginas necesarias
  calcularTotalPaginas() {
    this.totalPaginas = Math.ceil(this.listaUsuarios.length / this.usuariosPorPagina);
  }

  // Metodo que que obtiene los usuarios de la pagina actual
  get usuariosPaginados(): IUsuario[] {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    return this.listaUsuarios.slice(inicio, inicio + this.usuariosPorPagina);
  }

  // Metodo para pasar de pagina
  siguientePagina() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }

  //Metodo para retroceder de pagina
  anteriorPagina() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
}
