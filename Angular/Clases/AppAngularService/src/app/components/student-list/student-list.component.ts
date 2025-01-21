import { Component, inject } from '@angular/core';
import { Istudent } from '../../interface/istudent';
import { StudentService } from '../../services/student.service';
import { StudentCardComponent } from "../student-card/student-card.component";
import { StudentFilterComponent } from "../student-filter/student-filter.component";

@Component({
  selector: 'app-student-list',
  imports: [StudentCardComponent, StudentFilterComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  private estudianteService = inject(StudentService);
  alumnos: Istudent[];

  constructor(){
    this.alumnos = [];
  };

  ngOnInit():void{
    this.alumnos = this.estudianteService.getAllStudents();
  };
}
