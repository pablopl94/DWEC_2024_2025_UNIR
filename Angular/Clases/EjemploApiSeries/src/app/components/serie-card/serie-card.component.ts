import { Component, inject, Input } from '@angular/core';
import { Iserie } from '../../interfaces/iserie';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-card',
  imports: [],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css',
})
export class SerieCardComponent {
  serieServices = inject(SeriesService);
  @Input() miSerie!: Iserie;

  constructor() {}

  deleteSerie(serie: Iserie) {
    this.serieServices.deleteByTitle(serie.title);
  }
}
