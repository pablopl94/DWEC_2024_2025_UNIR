import { Component, inject, INJECTOR, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { IUsuario } from '../../interfaces/iusuario';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-usuario-view',
  imports: [BotoneraComponent],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  usuarioService = inject(UsuarioService);
  miUsuario!: IUsuario;

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(async (params:any)=>{
    let id = params._id;
    console.log(id);
    try{
      this.miUsuario = await this.usuarioService.getById(id)
    }catch(error){
      console.log(error);
    }
   })
  }


}
