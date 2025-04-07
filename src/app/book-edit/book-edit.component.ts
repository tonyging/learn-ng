// book-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  isNewBook = true;
  bookId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isNewBook = false;
      this.bookId = +id;
      const book = this.bookService.getBook(this.bookId);
      if (book) {
        this.bookForm.patchValue(book);
      } else {
        this.router.navigate(['/books']);
      }
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      
      if (this.isNewBook) {
        this.bookService.addBook(bookData);
      } else {
        const updatedBook: Book = {
          ...bookData,
          id: this.bookId
        };
        this.bookService.updateBook(updatedBook);
      }
      
      this.router.navigate(['/books']);
    }
  }
}