const buttonAdd = document.querySelector(".button-add");
const popupContainer = document.querySelector(".popup-form");
const bookContainer = document.querySelector(".books-container");
const popupForm = document.querySelector(".form-add");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
let isRead = false;
const thisYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  getBooksFromShelf();
});

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", showPopupForm);

/**
 * Add book to bookshelf using pop up form
 */
popupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const title = inputTitle.value,
      author = inputAuthor.value,
      pages = inputPages.value;

    const book = new Book(title, author, pages, isRead);
    book.addBook(myBooks);

    popupContainer.style.display = "none";
    clearForm();
    location.reload();
  } else {
    alert("Please fill in all fields");
  }
});

document.querySelector("#read").onchange = function (e) {
  if (e.target.checked) isRead = true;
  else isRead = false;
};

function validateInputs() {
  if (
    inputTitle.value === "" ||
    inputAuthor.value === "" ||
    inputPages.value === ""
  ) {
    return false;
  }

  return true;
}

function clearForm() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.checked = false;
}

function showPopupForm() {
  popupContainer.style.display = "flex";
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
    bookItem.setAttribute("data-id", item.id);
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
    read.textContent = item.read ? "READ" : "NOT READ";
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

/**
 * Close pop up form after clicking on overlay
 */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    popupContainer.style.display = "none";
  }
});

/**
 * Close pop up form after clicking Escape key
 */
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    popupContainer.style.display = "none";
  }
});
