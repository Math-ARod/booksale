import { Injectable } from '@angular/core';
import { books } from './book-datas';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  booksList = books

  getBooksList() {
    return this.booksList
  }
}
