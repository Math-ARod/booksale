import { MatCardModule } from '@angular/material/card';
import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

import { BookRoutingModule } from './book-routing.module';
import { BookslistComponent } from './bookslist/bookslist.component';


@NgModule({
  declarations: [
    BookslistComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [BookService],
  exports: [BookslistComponent]
})
export class BookModule { }
