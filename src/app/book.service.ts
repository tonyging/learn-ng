import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Angular 完全指南',
      author: '張三',
      description: '全面介紹Angular框架的使用方法',
      price: 450
    },
    {
      id: 2,
      title: 'TypeScript 學習筆記',
      author: '李四',
      description: '從零開始學習TypeScript',
      price: 380
    },
    {
      id: 3,
      title: 'RxJS 實戰',
      author: '王五',
      description: '深入淺出響應式編程',
      price: 420
    }
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  // 更新圖書
  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  // 添加圖書
  addBook(book: Book): void {
    // 為新書生成ID (簡單實現)
    const maxId = Math.max(...this.books.map(b => b.id), 0);
    const newBook = {
      ...book,
      id: maxId + 1
    };
    this.books.push(newBook);
  }

  // 刪除圖書
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}