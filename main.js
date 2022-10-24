const buttonAdd = document.querySelector(".button-add");
const popupContainer = document.querySelector(".popup-form");
const myForm = document.querySelector(".form-add");
const formAddButton = document.querySelector(".form-add button");
const thisYear = new Date().getFullYear();
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

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", showAddForm);
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    pages = document.querySelector("#pages").value,
    read = document.querySelector("#read").value;

  console.log(title, author, pages, read);
});



document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    popupContainer.style.display = "none";
  }
});
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    popupContainer.style.display = "none";
  }
});

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

function showAddForm() {
  popupContainer.style.display = "flex";
}
