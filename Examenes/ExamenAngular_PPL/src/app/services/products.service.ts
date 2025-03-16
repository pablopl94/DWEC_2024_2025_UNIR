import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  httpClient = inject(HttpClient);
  baseUrl = "https://peticiones.online/api/products"

  constructor() {}

    getAllProducts(): Promise <IProduct[]> {
      return lastValueFrom(
        this.httpClient.get<{results: IProduct[]}>(this.baseUrl)
      ).then(response => response.results ); 
    }

    getById(_id: string): Promise<IProduct> {
      return lastValueFrom(this.httpClient.get<IProduct>(`${this.baseUrl}/${_id}`));
    }

}
