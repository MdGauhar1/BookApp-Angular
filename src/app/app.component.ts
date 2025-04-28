import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BookService } from './services/book.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  searchQuery: string = '';
  books: any[] = [];

  title = 'book-app';

  constructor(private bookService: BookService,  private router: Router) {}

  isReviewDropdownOpen = false;
  isMobileMenuOpen = false;

  toggleReviewDropdown() {
    this.isReviewDropdownOpen = !this.isReviewDropdownOpen;
  }

  toggleMobileMenu() {  
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  searchBooks() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search-results'], { queryParams: { q: this.searchQuery } });
    }
  }
}
