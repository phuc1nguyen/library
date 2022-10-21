const buttonAdd = document.querySelector(".button-add");
const popupContainer = document.querySelector(".popup-form");
const formAddButton = document.querySelector(".form-add button");
const thisYear = new Date().getFullYear();
let myLib = [];

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", showAddForm);
formAddButton.addEventListener("click", () => {
  console.log(12345);
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
