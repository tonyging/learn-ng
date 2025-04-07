import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    // 從路由參數中獲取圖書ID
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.book = this.bookService.getBook(id);
    });
  }
}