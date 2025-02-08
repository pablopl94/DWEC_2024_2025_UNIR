import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-usuario-form',
  imports: [ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {
  router = inject(Router);
  usuariosService = inject(UsuarioService);
  activatedRoute = inject(ActivatedRoute);

  usuarioForm: FormGroup;
  tipo: string;

  constructor() {
    this.tipo = "Insertar";
    this.usuarioForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,16}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      image: new FormControl('https://i.pravatar.cc/500?u=', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      if (params._id) {
        this.tipo = "Actualizar";
        const response: IUsuario = await this.usuariosService.getById(params._id);
        
        this.usuarioForm = new FormGroup({
          _id: new FormControl(response._id, [Validators.required]), 
          first_name: new FormControl(response.first_name, [Validators.required]),
          last_name: new FormControl(response.last_name, [Validators.required]),
          username: new FormControl(response.username, [Validators.required]),
          email: new FormControl(response.email, [Validators.required]),
          image: new FormControl(response.image, [Validators.required]),
          password: new FormControl(response.password, [Validators.required])
        });
      }
    });
  }

  async getDataForm() {
    let usuario: IUsuario = this.usuarioForm.value;
    if (usuario._id) {
      const response = await this.usuariosService.updateUsuario(usuario);
      if (response && response._id) {
        alert(`El usuario ${response.username} se ha actualizado correctamente`);
        this.router.navigate(['/home']);
      } else {
        alert(`Error al actualizar el usuario`);
      }
    } else {
      const response = await this.usuariosService.insertUsuario(usuario);
      if (response && response.id) {
        alert(`El usuario ${response.username} se ha insertado correctamente`);
        this.usuarioForm.reset();
        this.router.navigate(['/home']);
      } else {
        alert(`Error al insertar el usuario`);
      }
    }
  }

  checkControl(FormControlName: string, validator: string): boolean | undefined {
    return this.usuarioForm.get(FormControlName)?.hasError(validator) &&
           this.usuarioForm.get(FormControlName)?.touched;
  }
}
