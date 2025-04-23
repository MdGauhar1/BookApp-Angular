// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // addBook(book: Book): Observable<Book> {
  //   return this.http.post<Book>(this.apiUrl, book);
  // }

  deleteBook(id: number) {
    return this.http.delete(`http://localhost:8080/api/books/${id}`);
  }

  searchByTitle(title: string) {
    return this.http.get<Book[]>(`http://localhost:8080/api/books/by-title?title=${title}`);
  }
  
  searchByAuthor(author: string) {
    return this.http.get<Book[]>(`http://localhost:8080/api/books/by-author?author=${author}`);
  }

  // addBookWithFile(book: Book, file: File) {
  //   const formData = new FormData();
  //   formData.append('title', book.title);
  //   formData.append('author', book.author);
  //   formData.append('file', file);
  
  //   return this.http.post('http://localhost:8080/api/books/upload', formData, {
  //     responseType: 'text' as 'json'
  //   });
  // }


  addBookWithFileAndImage(book: Book, file: File, image?: File) {
    const formData = new FormData();
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('file', file);
    if (image) {
      formData.append('image', image);
    }
  
    return this.http.post('http://localhost:8080/api/books/upload', formData, {
      responseType: 'text' as 'json'
    });
  }
  
  
  
}
