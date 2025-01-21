import { ProductService } from './../../service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
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
  }

  }



