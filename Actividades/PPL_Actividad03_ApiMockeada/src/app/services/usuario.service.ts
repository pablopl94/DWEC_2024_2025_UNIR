import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpClient = inject(HttpClient);
  baseUrl: string = "https://peticiones.online/api/users";

  constructor() {}

  // Cargar usuarios desde la API , pasando el array que hay dentro de results. 
  getAll(): Promise<IUsuario[]> {
    return lastValueFrom(
      this.httpClient.get<{results: IUsuario[]}>(this.baseUrl)
    ).then(response => response.results ); 
  }

  // Obtener un usuario por su ID
  getById(_id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${_id}`));
  }

  // Eliminar un usuario y actualizar el signal
  deleteById(_id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.baseUrl}/${_id}`));
  }

  // Insertar un nuevo usuario en la API
  insertUsuario(usuario: IUsuario): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.post<IUsuario>(this.baseUrl, usuario));
  }

  // Actualizar un usuario y actualizar el signal
  updateUsuario(usuario: IUsuario): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.put<IUsuario>(`${this.baseUrl}/${usuario._id}`, usuario));
  }


}