import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuarioViewComponent } from './pages/usuario-view/usuario-view.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';

export const routes: Routes = [
    {path:"",pathMatch:"full", redirectTo:'home' },
    {path:"home", component: UsuariosListComponent},
    {path:"user/:_id", component: UsuarioViewComponent},
    {path:"newuser", component: UsuarioFormComponent},
    {path:"updater/:_id", component: UsuarioFormComponent},

    {path: "**", redirectTo: "home"}
];
