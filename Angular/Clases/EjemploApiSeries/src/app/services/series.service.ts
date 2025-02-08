import { Injectable } from '@angular/core';
import { Iserie } from '../interfaces/iserie';

@Injectable({providedIn: 'root'})
export class SeriesService {

  private arraySeries: Iserie[];

  constructor() { 
    this.arraySeries=[];

    fetch("https://peticiones.online/api/series")
      .then(response => response.json())
      .then(series => {
        series.forEach((element: any) => {
          let serie = element as Iserie;
          this.arraySeries.push(serie);
        });
        
      });
      
  }

  getAllSeries(): Iserie[]{
    return this.arraySeries;
  }

  deleteByTitle(title: string): Iserie[]{
    let i = this.arraySeries.findIndex(serie => serie.title === title)

    if(i !== -1){
      this.arraySeries.splice(i,1);
    } 
        return this.arraySeries
    }
       


  
}
