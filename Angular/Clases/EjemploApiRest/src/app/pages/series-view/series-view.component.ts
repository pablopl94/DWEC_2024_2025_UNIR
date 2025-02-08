import { Component, inject, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ISerie } from '../../interfaces/ISerie';
import { ActivatedRoute } from '@angular/router';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-series-view',
  imports: [BotoneraComponent],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css'
})
export class SeriesViewComponent implements OnInit {

  seriesService = inject(SeriesService);
  activatedRoute = inject(ActivatedRoute);
  miSerie!: ISerie;

  constructor(){

  }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params : any) => {
      let _id: string = params._id as string;
      try{
        this.miSerie = await this.seriesService.getByIdWithPromesa(_id);
      }catch(error){
        console.log(`Error al llamar a la API ${error}`);
      }
    })
    
  }

  
}
