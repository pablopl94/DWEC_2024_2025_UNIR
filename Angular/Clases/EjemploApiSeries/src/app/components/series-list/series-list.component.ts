import { Component, inject } from '@angular/core';
import { Iserie } from '../../interfaces/iserie';
import { SeriesService } from '../../services/series.service';
import { AppComponent } from "../../app.component";
import { SerieCardComponent } from "../serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  imports: [ SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  arraySerie: Iserie[];
  serieService = inject(SeriesService);

  constructor(){
    this.arraySerie= [];
  }

  ngOnInit(): void{
    this.arraySerie = this.serieService.getAllSeries();
    console.log(this.arraySerie);
  }
}
