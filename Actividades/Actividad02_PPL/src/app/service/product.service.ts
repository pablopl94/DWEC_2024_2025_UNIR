import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private arrayProductos: IProduct[];

  constructor() {
    this.arrayProductos = [];
  }


  // Método para cargar datos del fetch de forma asincrona
  async fetchData(): Promise<IProduct[]> {
    const response = await fetch('https://jsonblob.com/api/1325122292308697088');
    this.arrayProductos = await response.json(); 
      console.log('Datos del fetch cargados en el array:', this.arrayProductos); 
      return this.arrayProductos;
  }

  // Devuelve una promesa del arrayProductos si han cargado los datos del fetch
  getAllWithPromises(): Promise<IProduct[]> {
    if (this.arrayProductos.length > 0) {
      return Promise.resolve(this.arrayProductos);
    } else {
        console.log('Datos no cargados, se vuelve a llamar a la carga del fetch.');
        return this.fetchData();
    }
  }



  // Añadir nuevo produto al array en memoria
  addProduct(newProduct: IProduct): void {
    this.arrayProductos.push(newProduct);
    console.log('Producto añadido al array:', newProduct);
  }
  
  // Eliminar producto por ID
  deleteProduct(productId: string): void {
    const tamañoInicial = this.arrayProductos.length;
    this.arrayProductos = this.arrayProductos.filter(product => product._id !== productId);

  }
}

