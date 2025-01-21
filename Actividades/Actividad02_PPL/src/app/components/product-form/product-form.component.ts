import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/iproduct';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {



  productoService = inject(ProductService)
  altaForm!: FormGroup;
  arrayCategorias:string[];

  constructor(){

    this.arrayCategorias=["mujer","hombre","niño"];

    this.altaForm = new FormGroup({
      name: new FormControl("",Validators.required),
      description: new FormControl ("",Validators.required),
      price: new FormControl ("" , Validators.required),
     // category: new FormControl ("",Validators.required),
      image: new FormControl ("",Validators.required),
      active: new FormControl (1,Validators.required)
    },);
  }
  

  getDataForm() {
    if(this.altaForm.valid){
      const newProduct:IProduct = { 
        _id: uuidv4(), // GENERAMOS UN ID UNICO CON UUID 
        ...this.altaForm.value
      };
      this.productoService.addProduct(newProduct);
      console.log('Producto añadido correctamente' , newProduct); 
      this.altaForm.reset();
    }else{
      console.log('No se ha podido añadir el producto');
    } 
  }

}

