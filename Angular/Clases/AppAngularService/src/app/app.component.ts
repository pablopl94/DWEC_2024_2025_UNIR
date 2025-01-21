import { Component } from '@angular/core';
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentFormComponent } from "./components/student-form/student-form.component";

@Component({
  selector: 'app-root',
  imports: [StudentListComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularService';
}
