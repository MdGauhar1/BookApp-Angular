import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'book-app';

  isReviewDropdownOpen = false;
  isMobileMenuOpen = false; // ✅ Add this

  toggleReviewDropdown() {
    this.isReviewDropdownOpen = !this.isReviewDropdownOpen;
  }

  toggleMobileMenu() {   // ✅ Add this
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
