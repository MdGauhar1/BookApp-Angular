import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  // constructor(private bookService: BookService) {}
  constructor(private bookService: BookService, private http: HttpClient) {}


  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    if (confirm(`Are you sure you want to delete book with ID ${id}?`)) {
      this.bookService.deleteBook(id).subscribe(() => {
        alert('Book deleted successfully');
        this.loadBooks(); // Refresh list
      });
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
