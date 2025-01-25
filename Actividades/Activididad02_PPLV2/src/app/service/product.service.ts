import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private arrayProductos: IProduct[]; 

  constructor() {
    // Inicializamos el arrayProductos donde vamos a guardar los datos de la API vacio
    this.arrayProductos = []; 

    //Obtenemos mediante el fetch los datos de la API
    fetch ('https://jsonblob.com/api/1325122292308697088')
    .then((response) => response.json())  
    .then(producto => {
        producto.forEach((element: any) => {
          let producto = element as IProduct;
          this.arrayProductos.push(producto);
          });
        }
      );
    }

   // Devuelve el array con todos los productos de la API
    getAllProducts(): IProduct[] {
      return this.arrayProductos;
    }

    // Este método elimina un producto del arrayProductos
    // utilizando su ID y devuelve el array actualizado
    deleteProducts(productId: string): IProduct[] {
      let i = this.arrayProductos.findIndex(producto => producto._id === productId);
      if (i !== -1) {
        this.arrayProductos.splice(i, 1);
      }  
      return this.arrayProductos;
    }
    
    // Método para agregar un nuevo producto al arrayProductos
    addProduct(newProduct: IProduct):  void  {
      console.log('Añadiendo producto:', newProduct);
      this.arrayProductos.push(newProduct);
      console.log('Array actualizado:', this.arrayProductos);
    }

    //Metodo para filtrar la lista de productos según los filtros que le pasamos por parametro
    getFilteredProducts(filters: {name?: string; category?: string; active?: boolean; priceMin?: number; priceMax?: number;}): IProduct[] {
      return this.arrayProductos.filter((producto) => {
        const matchesName = !filters.name || producto.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesCategory = !filters.category || producto.category === filters.category;
        const matchesActive = filters.active === undefined || producto.active === filters.active;
        const matchesPriceMin = filters.priceMin === undefined || producto.price >= filters.priceMin;
        const matchesPriceMax = filters.priceMax === undefined || producto.price <= filters.priceMax;
  
        return matchesName && matchesCategory && matchesActive && matchesPriceMin && matchesPriceMax;
      });
    }

}
