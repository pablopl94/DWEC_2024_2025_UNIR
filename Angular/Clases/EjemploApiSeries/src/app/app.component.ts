import { Component } from '@angular/core';
import { SeriesListComponent } from "./components/series-list/series-list.component";

@Component({
  selector: 'app-root',
  imports: [SeriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploApiSeries';
}
