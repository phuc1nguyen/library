const buttonAdd = document.querySelector(".button-add");
const popupContainer = document.querySelector(".popup-form");
const popupForm = document.querySelector(".form-add");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
let isRead = false;
const thisYear = new Date().getFullYear();

document.querySelector(".footer-year").textContent = thisYear;
buttonAdd.addEventListener("click", showPopupForm);
popupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const title = inputTitle.value,
      author = inputAuthor.value,
      pages = inputPages.value;

    const book = new Book(title, author, pages, isRead);
    console.log(book);

    popupContainer.style.display = "none";
    clearForm();
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
