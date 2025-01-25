import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/iproduct';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {

  productoService = inject(ProductService);
  altaForm!: FormGroup;
  categorias: string[] ;
  arrayProductos: IProduct[] = [];

  constructor() {

    this.categorias = [];

    this.altaForm = new FormGroup({
      _id: new FormControl(uuidv4()), 
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required), 
      image: new FormControl('', Validators.required),
      active: new FormControl(1, Validators.required),
    });
  }

  // Al iniciar el componente verificamos cada 5" si los productos están cargados,
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

  //Metodo para enviar los resultados del formulario al metodo addProduct del servicio y resetear el formulario
  getDataForm(): void {
    const newProduct: IProduct = this.altaForm.value; 
    this.productoService.addProduct(newProduct); 
    this.altaForm.reset();
  }


}

