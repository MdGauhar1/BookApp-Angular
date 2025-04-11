import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [FormsModule]
})
export class AddBookComponent {
  book: Book = { id: 0, title: '', author: '' };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      alert('Book added successfully!');
      this.router.navigate(['/book-list']);
    });
  }
}