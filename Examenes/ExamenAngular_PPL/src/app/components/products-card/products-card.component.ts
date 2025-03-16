import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { IProduct } from '../../interfaces/iproduct';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-products-card',
  imports: [BotoneraComponent],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {

  @Input() miProduct!: IProduct;
  productoService = inject(ProductService);
   
  
}
