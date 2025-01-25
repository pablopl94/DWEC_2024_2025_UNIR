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
  categorias: string[];
  arrayProductos: IProduct[];

  constructor() {
    this.categorias = [];
    this.arrayProductos = [];
    
  }

  // Al iniciar el componente cada 5" este metodo comprueba si los productos están cargados,
  // una vez cargados, los filtramos para obtener las categorias y los guardamos en
  // el arrayCategorias para poder usarlo en el formulario
  ngOnInit(): void {
    const interval = setInterval(() => {
      const productos = this.productoService.getAllProducts();
  
      if (productos.length > 0) {
        this.arrayProductos = productos;
        this.categorias = productos
          .map((producto) => producto.category)
          .filter((categoria, index, array) => array.indexOf(categoria) === index);
        clearInterval(interval);
      }
    }, 500);
  }

  // Metodo para enviar un evento con los resultados del filtro al ListComponent
  enviarFiltros(form: NgForm): void {
    const filtros = form.value;

    const filtrosTransformados = {
      ...filtros,
      active: filtros.active === '' ? undefined : filtros.active === 'true',
      priceMin: filtros.priceMin ? Number(filtros.priceMin) : undefined,
      priceMax: filtros.priceMax ? Number(filtros.priceMax) : undefined,
    };


    this.filtrosAplicados.emit(filtrosTransformados);
  }

  //Metodo para volver a cargar la pagina si se selecciona la opcion de "todos" en el select. ( Como apaño para volver a cargar la lista con todos los productos)
  resetarFormulario(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement.value === 'todos') {
      window.location.reload();
    }
  }


}
