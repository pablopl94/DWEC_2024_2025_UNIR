import { Component, inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { IServicio } from '../../interface/IServicio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cardview',
  imports: [],
  templateUrl: './cardview.component.html',
  styleUrl: './cardview.component.css'
})
export class CardviewComponent {

  serviciosService = inject(ServicioService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);


  miServicio!: IServicio;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('Parámetros recibidos:', params); // Verifica qué parámetros llegan
      
      let miUrl: string = params.url as string;
      console.log('URL buscada:', miUrl); // Verifica el valor de la URL
  
      let response = this.serviciosService.getByUrl(miUrl);
      console.log('Respuesta del servicio:', response); // Verifica qué devuelve el servicio
  
      if (response !== undefined) {
        this.miServicio = response;
        console.log('Servicio encontrado:', this.miServicio); // Verifica el servicio asignado
      } else {
        console.warn('Servicio no encontrado. Redirigiendo...');
        // this.router.navigate(['/servicio404']); // Comprueba si falla la redirección
      }
    });
  }
  

}
