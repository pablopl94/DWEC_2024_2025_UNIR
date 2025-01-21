import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  arrayImagenes:any[];
  imagenActual:any;

  constructor(){
    this.arrayImagenes = [
      {
      url: 'https://placehold.co/600x400/orange/white',
      title: 'Naranja'
      },
      {
      url: 'https://placehold.co/600x400/blue/white',
      title: 'Azul'
      },
      {
      url: 'https://placehold.co/600x400/green/white',
      title: 'Verde'
      },
      {
      url: 'https://placehold.co/600x400/red/white',
      title: 'Rojo'
      }
      ]
  
      this.imagenActual = 0;

    }

    siguienteImagen():void{
      this.imagenActual ++
      if(this.imagenActual>= this.arrayImagenes.length ){
       this.imagenActual = 0;
      }
    }

    anteriorImagen():void{
      this.imagenActual--;
      if(this.imagenActual < 0){
       this.imagenActual = this.arrayImagenes.length -1;
      }
    }
}
