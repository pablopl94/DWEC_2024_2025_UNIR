import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  router = inject(Router)


logOut() {
 localStorage.removeItem('accessToken');
 localStorage.removeItem('refreshToken');
 this.router.navigate(['/login'])
}

}
