/**
 * Represent the book item
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} pages - The book's number of pages
 * @param {boolean} isRead - Whether the book is read
 */
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}, ${pages} pages, ${
    isRead ? "already read" : "not read yet"
  }`;
};

/**
 * Represent the book collection
 */
function BookShelf() {
  this.books = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
}

BookShelf.prototype.addBook = function (book) {
  this.books.push(book);
  localStorage.setItem("books", JSON.stringify(this.books));
};

BookShelf.prototype.removeBook = function (book) {
  const removedBooks = this.books.filter((item) => book.title !== item.title);
  localStorage.setItem("books", JSON.stringify(removedBooks));
};

BookShelf.prototype.isInShelf = function (book) {
  return this.books.some((item) => book.title === item.title);
};
