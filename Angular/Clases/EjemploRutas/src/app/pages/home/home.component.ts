import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router);

getSubscribe(subscribeForm: NgForm) {
 if(subscribeForm.value.email !== ""){
    this.router.navigate(['/servicios']);
    subscribeForm.reset();
  }else{
    alert("El email no puede estar vacio");
  }
}

}
