import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../models/review.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-review',
  standalone: true,
  templateUrl: './get-review.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./get-review.component.css']
})
export class GetReviewComponent {
  bookId: string = '';
  reviews: Review[] = [];

  constructor(private http: HttpClient) {}

  fetchReviews() {
    this.http.get<Review[]>(`http://localhost:8080/api/reviews/${this.bookId}`)
      .subscribe(data => this.reviews = data);
  }
}
