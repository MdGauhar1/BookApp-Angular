// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BookService } from '../services/book.service';
// import { Book } from '../models/book.model';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-add-book',
//   standalone: true,
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.css'],
//   imports: [FormsModule, CommonModule]
// })
// export class AddBookComponent {
//   book: Book = { id: 0, title: '', author: '' };
//   selectedFile!: File;
//   selectedImage!: File;

//   constructor(private bookService: BookService, private router: Router) {}

//   onFileChange(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   onSubmit(): void {
//     if (!this.selectedFile) {
//       alert('Please select a file.');
//       return;
//     }

//     this.bookService.addBookWithFile(this.book, this.selectedFile).subscribe({
//       next: () => {
//         alert('Book added successfully!');
//         this.router.navigate(['/book-list']);
//       },
//       error: err => {
//         console.error('Upload error:', err);
//         alert('Failed to save book.');
//       }
//     });
//   }
// }



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AddBookComponent {
  book: Book = { id: 0, title: '', author: '' };
  selectedFile!: File;
  selectedImage!: File;

  constructor(private bookService: BookService, private router: Router) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      alert('Please select a PDF file.');
      return;
    }

    this.bookService.addBookWithFileAndImage(this.book, this.selectedFile, this.selectedImage).subscribe({
      next: () => {
        alert('Book with image uploaded successfully!');
        this.router.navigate(['/book-list']);
      },
      error: err => {
        console.error('Upload error:', err);
        alert('Failed to upload book.');
      }
    });
  }
}

