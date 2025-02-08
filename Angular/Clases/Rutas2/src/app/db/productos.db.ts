import { Producto } from '../interfaces/producto';

export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    title: 'PlayStation 5',
    subtitle: 'La mejor experiencia de juego',
    description: `La PlayStation 5 ofrece gráficos de última generación, tiempos de carga rápidos y una experiencia de juego envolvente.`,
    url: 'playstation-5',
  },
  {
    id: 2,
    title: 'MacBook Pro',
    subtitle: 'Potencia y rendimiento',
    description: `El MacBook Pro cuenta con el chip M1 que revoluciona la velocidad y la eficiencia en un diseño elegante y portátil.`,
    url: 'macbook-pro',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23',
    subtitle: 'El smartphone del futuro',
    description: `El Samsung Galaxy S23 redefine la innovación con su cámara de alta resolución, batería duradera y pantalla de calidad superior.`,
    url: 'samsung-galaxy-s23',
  },
];
