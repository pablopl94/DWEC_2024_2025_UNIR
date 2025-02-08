import { Component, inject, OnInit } from '@angular/core';
import { ISerie } from '../../interfaces/ISerie';
import { SeriesService } from '../../services/series.service';
import { SerieCardComponent } from "../../components/serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit {

  arraySeries: ISerie[];
  seriesServices = inject(SeriesService);

  constructor(){
    this.arraySeries = [];
  }

  async ngOnInit(){

    // Consumir API con observable
    // this.seriesServices.getAllWithObservable().subscribe((data:ISerie[]) =>{
    //   this.arraySeries=data;
    // }); 

    //Consumir API con promesas
    try{
      this.arraySeries = await this.seriesServices.getAllWithPromises();
    }catch(err){
    console.log('Error al conectar a la API: ' + err);
    }

  }

}
