import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'contacto' , component: ContactoComponent},
    {path: 'servicio' , component: ServiciosComponent}
];


