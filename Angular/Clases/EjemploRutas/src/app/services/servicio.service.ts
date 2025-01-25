import { Injectable } from '@angular/core';
import { IServicio } from '../interface/IServicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private arrayServicios: IServicio[];
  
  constructor() {
    this.arrayServicios=[];

    fetch('https://jsonblob.com/api/1332425808685490176')
    .then((response) => response.json())
    .then(servicio => {
      servicio.forEach((element: any) => {
        let servicio = element as IServicio;
        this.arrayServicios.push(servicio);
       });
     }
    );
  }

  getAllService():IServicio[]{
    return this.arrayServicios;
  }

  getByUrl(miUrl:string): IServicio | undefined{
    return this.arrayServicios.find(serv => serv.url == miUrl);
        // let servicio = this.arrServicio.find(serv => serv.url == miUrl);
    // if (servicio != undefined) {
    //   return servicio
    // }
    // else {
    //   let servi: Servicio = {
    //         title: "NO hay servicio",
    //         description: "NO hay servicio",
    //         url: "page404"
    //   }

    //     return servi;
    //   }
    }
}



  



   
  
  