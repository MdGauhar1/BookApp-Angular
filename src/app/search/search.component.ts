import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchType: string = 'title'; // or 'author'
  query: string = '';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  search() {
    if (this.searchType === 'title') {
      this.bookService.searchByTitle(this.query).subscribe(data => this.books = data);
    } else if (this.searchType === 'author') {
      this.bookService.searchByAuthor(this.query).subscribe(data => this.books = data);
    }
  }
}

