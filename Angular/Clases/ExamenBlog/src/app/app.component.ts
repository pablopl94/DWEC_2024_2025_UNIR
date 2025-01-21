import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostblogComponent } from "./components/postblog/postblog.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostblogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenBlog';
}
