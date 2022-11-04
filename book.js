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
    : [
        {
          title: "Dune Messiah",
          author: "Frank Herbert",
          pages: 337,
          isRead: false,
        },
      ];
}

BookShelf.prototype.addBook = function (book) {
  this.books.push(book);
  localStorage.setItem("books", JSON.stringify(this.books));
};

BookShelf.prototype.updateReadStatus = function (bookTitle) {
  const clickedBook = this.books.find((item) => bookTitle === item.title);
  const updatedShelf = [
    {
      ...clickedBook,
      isRead: !clickedBook.isRead,
    },
    ...this.books.filter((item) => item.title !== bookTitle),
  ];
  localStorage.setItem("books", JSON.stringify(updatedShelf));
};

BookShelf.prototype.removeBook = function (bookTitle) {
  const removedBooks = this.books.filter((item) => bookTitle !== item.title);
  localStorage.setItem("books", JSON.stringify(removedBooks));
};

BookShelf.prototype.isInShelf = function (bookTitle) {
  return this.books.some((item) => bookTitle === item.title);
};
