import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from './review/add-review/add-review.component';
import { GetReviewComponent } from './review/get-review/get-review.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookListComponent,
    AddReviewComponent,
    GetReviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      
    CommonModule,
    HttpClientModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
