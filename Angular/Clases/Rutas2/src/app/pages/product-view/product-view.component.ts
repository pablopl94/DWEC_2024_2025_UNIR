import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent implements OnInit {
  miProducto!: Producto;

  productoService = inject(ProductoService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let miUrl: string = params.url as string;
      let response = this.productoService.getByUrl(miUrl);

      if (response != undefined) {
        this.miProducto = response;
      } else {
        //Hacer una respuesta o navegar a otra page
        this.router.navigate(['/inicio']);
      }
    });
  }
}
