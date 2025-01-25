import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { CardviewComponent } from './pages/cardview/cardview.component';

export const routes: Routes = [
    {path: '' ,pathMatch: 'full', redirectTo: 'home'},
    {path: 'home' , component: HomeComponent},
    {path: 'contacto' , component: ContactoComponent},
    {path: 'servicios' , component: ServiciosComponent},
    { path: 'servicio/:url', component: CardviewComponent},
    { path: '**', component: Pagina404Component}
    //{path: '**' ,redirectTo:'home'} //Redirecciona url que no existe a la pagina de inicio
];


