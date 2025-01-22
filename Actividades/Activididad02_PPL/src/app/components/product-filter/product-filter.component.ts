import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-filter',
  imports: [FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  productoService = inject(ProductService);

  @Output() filtrosAplicados = new EventEmitter<{name?: string; category?: string;active?: boolean; priceMin?: number;priceMax?: number; }>();
  categorias: string[] = [];

  constructor() {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.productoService.getCategories().then((categorias) => {
      this.categorias = categorias;
      console.log('Categorías cargadas:', this.categorias);
    });
  }

  enviarFiltros(form: NgForm): void {
    const filtros = form.value;

    const filtrosTransformados = {
      ...filtros,
      active: filtros.active === '' ? undefined : filtros.active === 'true',
      priceMin: filtros.priceMin ? Number(filtros.priceMin) : undefined,
      priceMax: filtros.priceMax ? Number(filtros.priceMax) : undefined,
    };

    console.log('Filtros enviados:', filtrosTransformados);
    this.filtrosAplicados.emit(filtrosTransformados);
  }
}