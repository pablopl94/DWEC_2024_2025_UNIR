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
  productos: IProduct[] = []; 
  categorias: string[] = []; 

  constructor() {
    this.altaForm = new FormGroup({

      _id: new FormControl(uuidv4()), 
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required), 
      image: new FormControl('', Validators.required),
      active: new FormControl(1, Validators.required),
    });

    this.cargarProductos();
    this.cargarCategorias();
  }

  // Cargar productos
  cargarProductos(): void {
    this.productoService
      .getAllWithPromises()
      .then((data) => { this.productos = data;
        console.log('Productos cargados desde el formComponente:', this.productos);
      })
  }

  // Cargar categorías desde el servicio
  cargarCategorias(): void {
    this.productoService.getCategories()
      .then((categoriasUnicas) => {this.categorias = categoriasUnicas;
        console.log('Categorías cargadas en el formComponente:', this.categorias);
      })
  }

  // Obtener datos del formulario y agregar producto
  getDataForm(): void {
    if (this.altaForm.valid) {
      const newProduct: IProduct = this.altaForm.value;

      this.productoService.addProduct(newProduct);

      this.productoService.getAllWithPromises().then((data) => {
          this.productos = data;
          console.log('Producto añadido correctamente desde el formComponente:', newProduct);
        })

      this.altaForm.reset({
        _id: uuidv4(),
        name: '',
        description: '',
        price: '',
        category: '', 
        image: '',
        active: 1,
      });
    }
  }
}
