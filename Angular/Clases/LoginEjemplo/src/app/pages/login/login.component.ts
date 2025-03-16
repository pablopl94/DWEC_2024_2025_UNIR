import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  

usuersServices = inject(UsersService);
router = inject(Router);



ngOnInit(): void {
  if(localStorage.getItem('accessToken')){
    this.router.navigate(['/dashboard'])
  }
}

  async getUser(loginForm: NgForm) {
 const loginUser:IUser = loginForm.value as IUser;
 loginUser.expiresInMins = 30;

  try{
    let response = await this.usuersServices.login(loginUser);

    console.log(response);
  
    if(response.accessToken){
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    loginForm.reset();
    this.router.navigate(['/dashboard'])
    }
  }catch(error){
    alert('Credenciales incorrectos');
    loginForm.reset();
  }

  }

}
