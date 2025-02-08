import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpClient = inject(HttpClient);
  baseUrl: string = "http://paulopezdev.com:8080/ApiUsuariosPrueba/api/users";

  // Signal que almacena la lista de usuarios
  usuarios: WritableSignal<IUsuario[]> = signal<IUsuario[]>([]);

  constructor() {
    this.loadUsuarios(); // Cargar usuarios al iniciar
  }

  // Cargar usuarios desde la API y actualizar el signal
  async loadUsuarios() {
    const usuarios = await lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl));
    this.usuarios.set(usuarios); // Actualiza el signal
  }

  // Obtener todos los usuarios (desde el signal)
  getAll(): Signal<IUsuario[]> {
    return this.usuarios;
  }

  // Obtener un usuario por ID
  async getById(id: number): Promise<IUsuario> {
    return await lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${id}`));
  }

  // Eliminar un usuario y actualizar el signal
  async deleteById(id: number): Promise<void> {
    await lastValueFrom(this.httpClient.delete(`${this.baseUrl}/${id}`));
    await this.loadUsuarios(); // Recargar la lista de usuarios
  }

  // Insertar un nuevo usuario y actualizar el signal
  async insertUsuario(usuario: IUsuario): Promise<void> {
    await lastValueFrom(this.httpClient.post<IUsuario>(this.baseUrl, usuario));
    await this.loadUsuarios(); // Recargar la lista
  }

  // Actualizar un usuario y actualizar el signal
  async updateUsuario(usuario: IUsuario): Promise<void> {
    await lastValueFrom(this.httpClient.put<IUsuario>(`${this.baseUrl}/${usuario.id}`, usuario));
    await this.loadUsuarios(); // Recargar la lista
  }


}