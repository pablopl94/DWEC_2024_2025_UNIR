import { ProductService } from './../../service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, ProductFilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productoService = inject(ProductService)
  productos:IProduct[];

  constructor(){
    this.productos = [];
  };

  async ngOnInit(): Promise<void> {
    this.productos = await this.productoService.getAllWithPromises();
    console.log('Productos en el componente:', this.productos); 
  }

  eliminarProducto(productId: string): void {
    this.productoService.deleteProduct(productId);
    this.productos = this.productos.filter(product => product._id !== productId);
    console.log('Producto eliminado correctamente');
  }

  async aplicarFiltros(filtros: {name?: string;category?: string; active?: boolean; priceMin?: number; priceMax?: number;}): Promise<void> {
    console.log('Filtros aplicados:', filtros);
    this.productos = await this.productoService.getFilteredProducts(filtros);
    console.log('Productos filtrados:', this.productos);
  }


  }