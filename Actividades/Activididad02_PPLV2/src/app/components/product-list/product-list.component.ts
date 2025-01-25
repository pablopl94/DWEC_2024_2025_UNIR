import { ProductService } from './../../service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from "../product-card/product-card.component";
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from "../product-form/product-form.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, ProductFormComponent, ProductFilterComponent],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productoService = inject(ProductService)
  arrayProductos:IProduct[];

  constructor(){
    //Inicializamos el arrayProducts del list vacio
    this.arrayProductos = []; 
  };

  //Metemos en el arrayProducts del list el array que nos devuelve el metodo del servicio
  ngOnInit(): void {
    this.arrayProductos = this.productoService.getAllProducts();
  }

  
  //Aplicamos los filtros que nos llegan del evento del filtroComponent y aplicamos el metodo para filtrar del servicio
  aplicarFiltros(filtros: {name?: string;category?: string; active?: boolean; priceMin?: number; priceMax?: number;}): void {
    this.arrayProductos = this.productoService.getFilteredProducts(filtros);
  }

}