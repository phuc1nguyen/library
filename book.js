const myBooks = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : [
      {
        id: 1,
        title: "Dune",
        author: "Frank Herbert",
        pages: 658,
        read: true,
      },
      {
        id: 2,
        title: "Dune Messiah",
        author: "Frank Herbert",
        pages: 337,
        read: false,
      },
      {
        id: 3,
        title: "Children of Dune",
        author: "Frank Herbert",
        pages: 609,
        read: false,
      },
    ];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.addBook = function () {
  const lastBookId = myBooks[myBooks.length - 1].id;
  const newBook = {
    id: lastBookId + 1,
    title: this.title,
    author: this.author,
    pages: this.pages,
    read: this.isRead,
  };
  myBooks.push(newBook);
  localStorage.setItem("books", JSON.stringify(myBooks));
};

Book.prototype.removeBook = function (book) {
  const removedBooks = myBooks.filter((item) => book.id !== item.id);
  localStorage.setItem("books", JSON.stringify(removedBooks));
};
