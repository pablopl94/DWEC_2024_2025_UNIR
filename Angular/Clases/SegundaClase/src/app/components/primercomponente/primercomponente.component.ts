import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primercomponente',
  imports: [FormsModule],
  templateUrl: './primercomponente.component.html',
  styleUrl: './primercomponente.component.css',
})

export class PrimercomponenteComponent {
  //PROPIEDADES CLASE
  nombre: string;
  apellidos: string;
  edad: string;
  email: string;
  biblioteca: Array<string> = [];
  libroPreferido: string;
  colores: Array<string> = [];
  colorTexto: string;
  ruta: string;
  InfoColor: boolean;
  stock: number;
  texto: string;
  contador: number;
  esOculto: boolean;


  //CONSTRUCTOR CLASE
  constructor() {
    this.nombre = 'Pablo';
    this.apellidos = 'Prieto';
    this.edad = '30';
    this.email = 'pau@mail.com';
    this.biblioteca = [
      'Cien años de soledad',
      'El señor de los anillos',
      '1984',
      'Crimen y castigo',
      'El Principito',
      'Matar a un ruiseñor',
      'La Odisea',
      'El Hobbit',
      'Rayuela',
      'El Alquimista',
      'La sombra del viento',
      'Los juegos del hambre',
      'It (Eso)',
    ];
    this.libroPreferido =
      this.biblioteca[Math.floor(Math.random() * this.biblioteca.length)];
    this.colores = ['rojo', 'azul', 'verde', 'amarillo', 'morado'];
    this.colorTexto =
      this.colores[Math.floor(Math.random() * this.colores.length)];
    this.ruta = 'https://www.linkedin.com/in/pablopl94/';
    this.InfoColor = true;
    this.stock = 0;
    this.texto = '';
    this.contador = 0;
    this.esOculto=true;
    
  }

  //METODOS

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }

  infoBiblioteca(): string {
    let html = '<h3>Biblioteca libros</h3><ul>';
    this.biblioteca.forEach((libro) => {
      html += `<li>${libro}</li>`;
    });
    html += '</ul>';

    return html;
  }

  myOnclick(): void {
    this.InfoColor = !this.InfoColor;
  }

  myOnclick2(): void {
    this.contador++;
  }

  cambiarColorStock(): boolean {
    return this.stock > 0;
  }

  cambiarTextoStock(): string {
    if (this.stock > 0) {
      return `STOCK DISPONIBLE: ${this.stock}`;
    } else {
      return `NO HAY STOCK: ${this.stock}`;
    }
  }

  escribirTexto($event: any): void {
    this.texto = $event.target.value;
  }



}
