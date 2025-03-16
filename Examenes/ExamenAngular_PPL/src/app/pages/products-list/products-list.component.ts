import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/products.service';
import { ProductsCardComponent } from "../../components/products-card/products-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductsCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  productoService = inject(ProductService)
  arrayProductos:IProduct[];

  constructor(){
    this.arrayProductos = []; 
  };

  
  async ngOnInit(){
    try{
      this.arrayProductos = await this.productoService.getAllProducts()
    }catch(error){
      console.log("Error al cargar la API: " + error);
    }
  }

}