import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

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

  //constructor(private bookService: BookService) {}
  constructor(private bookService: BookService, private http: HttpClient) {}


  search() {
    if (this.searchType === 'title') {
      this.bookService.searchByTitle(this.query).subscribe(data => this.books = data);
    } else if (this.searchType === 'author') {
      this.bookService.searchByAuthor(this.query).subscribe(data => this.books = data);
    }
  }

  downloadBook(id: number, title: string): void {
    this.http.get(`http://localhost:8080/api/books/download/${id}`, {
      responseType: 'blob',
    }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}

