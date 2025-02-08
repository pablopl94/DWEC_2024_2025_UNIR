import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: 'inicio', component: HomeComponent },
    { path: 'productos', component: ProductListComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'producto/:url', component: ProductViewComponent},
    { path: '**', component: Page404Component}
];