import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  router = inject(Router);
  
  getSuscribe(suscribeForm: NgForm) {
    if (suscribeForm.value.email !== '') {
      //redirigir a otra page
      this.router.navigate(['/productos']);
      suscribeForm.reset();
    } else {
      alert('El email no puede estar vacio');
    }
  }
}
