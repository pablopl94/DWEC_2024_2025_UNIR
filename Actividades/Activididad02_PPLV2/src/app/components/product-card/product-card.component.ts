import { Component,inject, Input} from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() miProduct!: IProduct;
  productoService = inject(ProductService);

  //Metodo para eliminar un producto del arrayProducts del servicio
  deleteProduct(productId: string): void {
    this.productoService.deleteProducts(productId);
   
  }
  
}