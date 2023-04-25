import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})
export class BookslistComponent implements OnInit {

  bookslist: Array<Book> = []

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookslist = this.bookService.getBooksList()
  }

}
