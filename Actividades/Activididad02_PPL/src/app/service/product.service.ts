import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private arrayProductos: IProduct[] = []; // Inicializa el array vacío

  constructor() { }

  // Método para cargar datos desde un fetch
  async fetchData(): Promise<IProduct[]> {
    try {
      const response = await fetch(
        'https://jsonblob.com/api/1325122292308697088'
      );
      if (!response.ok) {
        throw new Error(`Error al cargar datos: ${response.statusText}`);
      }
      this.arrayProductos = await response.json();
      console.log('Datos cargados en el array:', this.arrayProductos);
      return this.arrayProductos;
    } catch (error) {
      console.error('Error al realizar el fetch:', error);
      throw error;
    }
  }

  // Devuelve todos los productos como una Promesa
  async getAllWithPromises(): Promise<IProduct[]> {
    if (this.arrayProductos.length > 0) {
      return Promise.resolve(this.arrayProductos);
    } else {
      console.log('Datos no cargados, llamando al fetch.');
      return this.fetchData();
    }
  }

  // Obtener categorías únicas desde los productos
  async getCategories(): Promise<string[]> {
    const productos = await this.getAllWithPromises();
    const categoriasUnicas = [
      ...new Set(productos.map((product) => product.category)),
    ];
    console.log('Categorías únicas obtenidas:', categoriasUnicas);
    return categoriasUnicas;
  }

  //Filtra los productos 
  async getFilteredProducts(filters: {name?: string; category?: string; active?: boolean; priceMin?: number; priceMax?: number;}): Promise<IProduct[]> {
    return this.arrayProductos.filter((producto) => {
      const matchesName = !filters.name || producto.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesCategory = !filters.category || producto.category === filters.category;
      const matchesActive = filters.active === undefined || producto.active === filters.active;
      const matchesPriceMin = filters.priceMin === undefined || producto.price >= filters.priceMin;
      const matchesPriceMax = filters.priceMax === undefined || producto.price <= filters.priceMax;

      return matchesName && matchesCategory && matchesActive && matchesPriceMin && matchesPriceMax;
    });
  }

  // Añade un producto al array en memoria
  addProduct(newProduct: IProduct): void {
    this.arrayProductos.push(newProduct);
    console.log('Producto añadido al array:', newProduct);
  }

  // Elimina un producto por su ID
  deleteProduct(productId: string): void {
    const initialLength = this.arrayProductos.length;
    this.arrayProductos = this.arrayProductos.filter(
      (product) => product._id !== productId
    );

    if (this.arrayProductos.length < initialLength) {
      console.log(`Producto con ID ${productId} eliminado.`);
    } else {
      console.warn(`No se encontró ningún producto con ID ${productId}.`);
    }
  }
}
