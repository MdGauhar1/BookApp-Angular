import { Component } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
