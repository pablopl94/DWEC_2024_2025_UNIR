import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsViewComponent } from './pages/products-view/products-view.component';
  
export const routes: Routes = [
    {path:"",pathMatch:"full", redirectTo:'home' },
    {path:"home", component: ProductsListComponent},
    {path:"producto/:_id", component: ProductsViewComponent},
    {path: "**", redirectTo: "home"}
];


