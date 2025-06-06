// src/app/models/book.model.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    file?: File;
    imageBase64?: string;
  }
  