import { Component, inject, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { IServicio } from '../../interface/IServicio';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

@Component({
  selector: 'app-servicios',
  imports: [ServiceCardComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit{

  serviciosService = inject(ServicioService);
  misServicios: IServicio[];

  constructor(){
    this.misServicios = [];
  }

  ngOnInit(): void {
    this.misServicios = this.serviciosService.getAllService();
  }

}
