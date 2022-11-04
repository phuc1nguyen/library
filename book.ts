type BookType = {
  readonly title: string;
  readonly author: string;
  readonly pages: number;
  readonly isRead: boolean;
};

/**
 * Represent the book item
 */
export class Book {
  title: string;
  author: string;
  pages: number;
  isRead: boolean;

  constructor(book: BookType) {
    this.title = book.title;
    this.author = book.author;
    this.pages = book.pages;
    this.isRead = book.isRead;
  }

  getInfo(): string {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.isRead ? "already read" : "not read yet"
    }`;
  }
}

/**
 * Represent the book collection
 */
export class BookShelf {
  books: readonly BookType[];

  constructor() {
    this.books = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books")!)
      : [];
  }

  addBook(book: BookType): void {
    const updatedBooks = [...this.books, book];
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }

  updateReadStatus(bookTitle: string): void {
    const clickedBook = this.books.find(
      (item: BookType) => bookTitle === item.title,
    );
    const updatedShelf = [
      {
        ...clickedBook,
        isRead: !clickedBook?.isRead,
      },
      ...this.books.filter((item) => item.title !== bookTitle),
    ];
    localStorage.setItem("books", JSON.stringify(updatedShelf));
  }

  removeBook(bookTitle: string): void {
    const removed = this.books.filter(
      (item: BookType) => bookTitle !== item.title,
    );
    localStorage.setItem("books", JSON.stringify(removed));
  }

  isInShelf(bookTitle: string): boolean {
    return this.books.some((item: BookType) => bookTitle === item.title);
  }
}
