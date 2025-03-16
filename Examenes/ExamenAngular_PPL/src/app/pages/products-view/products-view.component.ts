import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-products-view',
  imports: [BotoneraComponent],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})

export class ProductsViewComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  miProduct!: IProduct;

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(async (params:any)=>{
    let id = params._id;
    try{
      this.miProduct = await this.productService.getById(id)
    }catch(error){
      console.log("Error al carga el producto: " + error);
    }
   })
  }
}
