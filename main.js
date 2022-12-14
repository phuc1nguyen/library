// UI Elements
const bookContainer = document.querySelector(".books-container");
const buttonAdd = document.querySelector(".button-add");
const popupContainer = document.querySelector(".popup-form");
const popupForm = document.querySelector(".form-add");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

let isRead = false;
const thisYear = new Date().getFullYear();

const bookShelf = new BookShelf();
const myBooks = bookShelf.books;

getBooksFromShelf();

// Add event to buttons on book item after displaying all books from bookshelf
document.addEventListener("DOMContentLoaded", function () {
  const buttonsRead = document.querySelectorAll(".book-item-read");
  const buttonsRemove = document.querySelectorAll(".book-item-remove");

  buttonsRead.forEach((btn) => {
    btn.addEventListener("click", updateReadStatus);
  });

  buttonsRemove.forEach((btn) => {
    btn.addEventListener("click", removeBook);
  });
});

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", showPopupForm);

function updateReadStatus(e) {
  const bookItem = e.target.closest(".book-item");
  const bookTitle = bookItem.querySelector(".book-item-title").textContent;

  bookShelf.updateReadStatus(bookTitle);

  location.reload();
}

function removeBook(e) {
  const bookItem = e.target.closest(".book-item");
  const bookTitle = bookItem.querySelector(".book-item-title").textContent;

  bookShelf.removeBook(bookTitle);
  location.reload();
}

// Add book to bookshelf using pop up form
popupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const book = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      isRead,
    );

    if (bookShelf.isInShelf(book.title)) {
      alert("This book is already added the bookshelf");
      popupContainer.style.display = "none";
      clearPopupForm();
    } else {
      bookShelf.addBook(book);
      popupContainer.style.display = "none";
      clearPopupForm();
      location.reload();
    }
  } else {
    alert("Please fill in all fields");
  }
});

// Change isRead variable based on checkbox status
document.querySelector("#read").onchange = function (e) {
  isRead = e.target.checked;
};

function validateInputs() {
  return !(
    inputTitle.value === "" ||
    inputAuthor.value === "" ||
    inputPages.value === ""
  );
}

function getBooksFromShelf() {
  myBooks.map((item) => {
    const bookItem = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");
    const buttons = document.createElement("div");

    bookItem.classList.add("book-item");
    bookItem.classList.add("card");
    title.classList.add("book-item-title");
    title.textContent = item.title;
    author.classList.add("book-item-author");
    author.textContent = item.author;
    pages.classList.add("book-item-pages");
    pages.textContent = item.pages;
    buttons.classList.add("buttons");
    read.setAttribute("type", "button");
    read.classList.add("book-item-read");
    read.classList.add("btn");
    read.textContent = item.isRead ? "READ" : "NOT READ";
    remove.setAttribute("type", "button");
    remove.classList.add("book-item-remove");
    remove.classList.add("btn");
    remove.textContent = "REMOVE";
    buttons.appendChild(read);
    buttons.appendChild(remove);
    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(pages);
    bookItem.appendChild(buttons);
    bookContainer.appendChild(bookItem);
  });
}

function clearPopupForm() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.checked = false;
}

function showPopupForm() {
  popupContainer.style.display = "flex";
}

// Close pop up form after clicking on overlay
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    popupContainer.style.display = "none";
  }
});

// Close pop up form after clicking Escape key
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    popupContainer.style.display = "none";
  }
});
