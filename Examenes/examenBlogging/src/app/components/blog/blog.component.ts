import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  noticias: any[] = [
    {
      titulo: 'The Hunt for Gollum',
      imagen: 'https://i.blogs.es/30e367/senor-anillos-hunt-gollum/1200_800.jpeg',
      texto: 'fecha de estreno, quién vuelve y quién no, novedades y todo lo que sabemos de la nueva película de la saga de Peter Jackson .',
      fecha: new Date().toLocaleDateString(),
    },
    {
      titulo: 'INTEL + AMD',
      imagen: 'https://hardzone.es/app/uploads-hardzone.es/2024/04/AMDINTEL.jpg?x=480&y=375&quality=80',
      texto: 'Con esa fusión se estaría creando un monopolio, y desaparecería la competencia que libran ahora mismo Intel y AMD.',
      fecha: new Date().toLocaleDateString(),
    },
  ];

  nuevaNoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  agregarNoticia(): void {
    const { titulo, imagen, texto, fecha } = this.nuevaNoticia;

    if (!titulo || !imagen || !texto || !fecha) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.noticias.push({ ...this.nuevaNoticia });

    this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
  }
}
