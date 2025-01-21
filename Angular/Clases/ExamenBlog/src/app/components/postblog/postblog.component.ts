import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlog } from '../../interface/iblog';

@Component({
  selector: 'app-postblog',
  imports: [CommonModule,FormsModule],
  templateUrl: './postblog.component.html',
  styleUrl: './postblog.component.css'
})
export class PostblogComponent {

  arrayPost:IBlog[]
  post:IBlog;

  constructor(){
    
    this.arrayPost = [
      this.post = {

        titulo: "Nueva pelicula de 'El señor de los Anillos",
        imagen: "https://www.prensalibre.com/wp-content/uploads/2021/08/El-sen%CC%83or-de-los-anillos-640x360-1.jpg",
        textoNoticia: "a Tierra Media de Tolkien recibió su mejor adaptación con la trilogía de 'El señor de los anillos' dirigida por Peter Jackson",
        fecha: "30/05/2024"
      },

      this.post = {
        titulo: "Nueva serie de Harry Potter anunciada",
        imagen: "https://media.harrypotterfanzone.com/harry-ron-and-hermione-1050x0-c-default.jpg",
        textoNoticia: "El mundo mágico de J.K. Rowling regresa con una serie que promete explorar historias inéditas de Hogwarts.",
        fecha: "15/06/2024"
      }
    ],

    this.post = {

      titulo: "",
      imagen: "",
      textoNoticia: "",
      fecha: ""
    }
  }

  guardarDatos(): void{

    this.arrayPost.push(this.post)

    this.post = {

      titulo: "",
      imagen: "",
      textoNoticia: "",
      fecha: ""
    }

  }


}
