import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { PRODUCTOS } from '../db/productos.db';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private arrayProductos: Producto[];

  constructor() {
    this.arrayProductos = PRODUCTOS;
  }

  getAll(): Producto[] {
    return this.arrayProductos;
  }

  getByUrl(miUrl: String): Producto | undefined {
    return this.arrayProductos.find((prod) => prod.url == miUrl);
  }
}
