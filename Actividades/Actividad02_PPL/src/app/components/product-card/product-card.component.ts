import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() miProduct!: IProduct;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  removeProduct(): void {
    this.onDelete.emit(this.miProduct._id); // Emite el ID del producto
  }
  
}
