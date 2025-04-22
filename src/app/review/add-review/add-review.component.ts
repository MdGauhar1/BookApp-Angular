import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../models/review.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  standalone: true,
  templateUrl: './add-review.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  bookId: string = '';
  review: Review = {
    stars: 0,
    comment: ''
  };

  constructor(private http: HttpClient) {}

  submitReview() {
    this.http.post(`http://localhost:8080/api/reviews/${this.bookId}`, this.review, { responseType: 'text' })
      .subscribe({
        next: (response) => alert('✅ ' + response),
        error: err => alert('❌ Failed to add review: ' + err.message)
      });
  }
  
}
