import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  arrayProductos: Producto[];
  productoService = inject(ProductoService);

  constructor() {
    this.arrayProductos = [];
  }

  ngOnInit(): void {
    this.arrayProductos = this.productoService.getAll();
  }
}
