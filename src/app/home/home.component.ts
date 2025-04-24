import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterLink } from '@angular/router';

export interface Book {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,  // This tells Angular that this is a standalone component
  imports: [CommonModule, RouterLink],  // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[] = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel about the American dream, set in the Jazz Age.',
      imageUrl: 'assets/gatsby.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel exploring the dangers of totalitarianism.',
      imageUrl: 'assets/1984.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racism, justice, and childhood in the Depression-era South.',
      imageUrl: 'assets/mockingbird.jpg'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic novel about love, marriage, and social class in 19th-century England.',
      imageUrl: 'assets/pride-and-prejudice.jpg'
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      description: 'A sailor’s obsession with hunting a giant white whale that symbolizes the elusive nature of revenge.',
      imageUrl: 'assets/moby-dick.jpg'
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A story about teenage angst and alienation, told through the eyes of Holden Caulfield.',
      imageUrl: 'assets/catcher-in-the-rye.jpg'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel about the American dream, set in the Jazz Age.',
      imageUrl: 'assets/gatsby.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel exploring the dangers of totalitarianism.',
      imageUrl: 'assets/1984.jpg'
    },
  ];
}