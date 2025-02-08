import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { ISerie } from '../interfaces/ISerie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpCliente = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/series';

  constructor() { }

    //OBTENER TODAS LAS SERIES DE LA API
    getAllWithObservable(): Observable<ISerie[]>{
    return this.httpCliente.get<ISerie[]>(this.baseUrl);
    }
 
    getAllWithPromises(): Promise<ISerie[]>{
      return lastValueFrom(this.httpCliente.get<ISerie[]>(this.baseUrl))
    }

    //OBTENER SERIES DE LA API POR SU ID
    getByIdWithPromesa(_id: string): Promise<ISerie>{
      return lastValueFrom(this.httpCliente.get<ISerie>(`${this.baseUrl}/${_id}`))
    }

    getByIdWithObservable(_id: string): Observable<ISerie>{
      return this.httpCliente.get<ISerie>(`${this.baseUrl}/${_id}`);
    }

    //ELIMINAR SERIES DE LA API POR SU ID
    deleteByIdWithObservables(_id: string): Observable<ISerie>{
      return this.httpCliente.delete<ISerie>(`${this.baseUrl}/${_id}`);
    }

    deleteByIdWithPromesas(_id: string): Promise<ISerie>{
      return lastValueFrom(this.httpCliente.delete<ISerie>(`${this.baseUrl}/${_id}`))
    }

    //INSERTAR SERIE EN LA API
    insertWithObservables(serie: ISerie): Observable<ISerie>{
      return this.httpCliente.post<ISerie>(this.baseUrl, serie);
    }

    insertWithPromesas(serie : ISerie): Promise<ISerie>{
      return lastValueFrom(this.httpCliente.post<ISerie>(this.baseUrl, serie));
    }
  
    //ACTUALIZAR UNA SERIE DE LA API
    updateWithObservables(serie: ISerie): Observable<ISerie>{
      return this.httpCliente.post<ISerie>(`${this.baseUrl}/${serie._id}`, serie);
    }

    updateWithPromesas(serie : ISerie): Promise<ISerie>{
      return lastValueFrom(this.httpCliente.post<ISerie>(`${this.baseUrl}/${serie._id}`, serie));
    }
}
