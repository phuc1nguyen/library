const buttonAdd = document.querySelector(".button-add");
const thisYear = new Date().getFullYear();
let myLib = [];

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const newBook = new Book(prompt("Enter your book title"), "Phuc", 223);

  myLib.push(newBook);
  console.log(myLib);
}
