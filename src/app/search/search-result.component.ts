import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
  imports: [CommonModule]
})
export class SearchResultComponent implements OnInit {
  books: any[] = [];
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    // ✅ When component loads, get query param
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      if (this.searchQuery) {
        this.searchBooks();
      }
    });
  }

  searchBooks() {
    if (this.searchQuery.trim() !== '') {
      this.bookService.searchBooksFromOpenLibrary(this.searchQuery).subscribe(
        (response) => {
          this.books = response.docs;
        },
        (error) => {
          console.error('Error fetching books:', error);
        }
      );
    }
  }
}
