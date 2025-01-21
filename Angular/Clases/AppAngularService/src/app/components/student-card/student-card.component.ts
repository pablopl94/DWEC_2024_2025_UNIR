import { Component, Input } from '@angular/core';
import { Istudent } from '../../interface/istudent';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {

  @Input () miAlumno! : Istudent;

}
