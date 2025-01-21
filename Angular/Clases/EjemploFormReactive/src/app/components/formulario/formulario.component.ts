import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormControlDirective, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interface/iuser';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


  arrayUsers: IUser[];
  modelForm: FormGroup<any>;

  constructor(){

    this.arrayUsers = [];

    this.modelForm = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      email: new FormControl (null,[Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      edad: new FormControl (null,[Validators.required, Validators.min(0), Validators.max(120)]),
      dni: new FormControl (null,[Validators.required,Validators.pattern(/^[0-9]{8,8}[A-Za-z]$/)]),
      password: new FormControl (null,[Validators.required, Validators.minLength(5)]),
      repitePassword: new FormControl (null,Validators.required)
    }, [this.passValidator]);
  }

  ngOnInt(): void{
    let miUser: IUser = {
      name: 'Fernando Alonso',
      email: 'alonso@astonf1.com',
      edad: 43,
      dni: '48764017Z',
      password: 'aston12345',
      repitePassword: 'aston12345'
    }

    //Opcion 1 :
    //this.modelForm.setValue(miUser);

    //Opcion 2: Puedo meter mis propios valores al cargar, modificar los que ya tenia
    // o no cargas los controladores

    this.modelForm = new FormGroup({
      name: new FormControl(miUser.name,[Validators.required, Validators.minLength(3)]),
      email: new FormControl (miUser.email,[Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      edad: new FormControl (miUser.edad,[Validators.required, Validators.min(0), Validators.max(120)]),
      dni: new FormControl (miUser.dni,[Validators.required,Validators.pattern(/^[0-9]{8,8}[A-Za-z]$/)]),
      password: new FormControl (miUser.password,[Validators.required, Validators.minLength(5)]),
      repitePassword: new FormControl (miUser.repitePassword,Validators.required)
    }, [this.passValidator]);

    
  }

  getDataForm() {
    let user: IUser = this.modelForm.value as IUser
    this.arrayUsers.push(user)
    console.log(this.arrayUsers);
    this.modelForm.reset();
    }

    checkControl(FormControlName : string, validador : string): boolean |
    undefined{
      return this.modelForm.get!(FormControlName)?.hasError(validador) &&
      this.modelForm.get(FormControlName)?.touched;
    }

    passValidator(formValue: AbstractControl):any{
      const pass1 = formValue.get('password')?.value;
      const pass2 = formValue.get('repitePassword')?.value;
      return(pass1 != pass2) ? {'passwordnotmatches' : true} : null;

    }

}
