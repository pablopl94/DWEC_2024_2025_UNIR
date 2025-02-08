import { Component, inject, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, RouterLink } from '@angular/router';
import { ISerie } from '../../interfaces/ISerie';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  seriesService = inject(SeriesService);
  router = inject(Router);

  @Input() myId: string;
  @Input() parent: string;


  constructor(){
    this.myId = "";
    this.parent="";
  }

  async deleteSerie(_id: string) {
    let confirmacion = confirm('Seguro que quieres borrar la serie con id ' + this.myId);
    if (confirmacion) {
      let response = await this.seriesService.deleteByIdWithPromesas(_id);
      if (response._id) {
        alert("Se ha borrado correctamente la serie " + response.title);
      }
    }
    
  }


  
}
