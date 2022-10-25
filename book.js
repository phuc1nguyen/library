let myLib = [
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
  const newBook = {
    id: 4,
    title: this.title,
    author: this.author,
    pages: this.pages,
    read: this.isRead,
  };
  myLib.push(newBook);
  // TODO: return updated myLib
  console.log(myLib);
  alert("Book added");
};

Book.prototype.removeBook = function (book) {
  const removed = myLib.filter((item) => book.id !== item.id);
  // TODO: return updated myLib
  console.log(removed);
  alert("Book removed");
};
