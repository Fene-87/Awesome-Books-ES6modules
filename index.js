import Book from "./modules/book.js";
import UI from "./modules/userInterface.js";
import Store from "./modules/store.js";
import { DateTime } from "./modules/luxon.js";

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.add-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#book-author').value;

  const book = new Book(title, author);

  UI.addBookToList(book);
  Store.addBook(book);

  UI.clearFields();
});

document.querySelector('.displayed-books').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const bookToRemove = e.target.previousElementSibling.firstElementChild.textContent;

  Store.deleteBook(bookToRemove);
  
});

const currentDate = document.querySelector('.current-date');

  const dt = DateTime.local();
  const newDate = dt.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS)
  currentDate.innerHTML = `
    <p>${newDate} &nbsp ${newTime}</p>
  `;


const navLinks = document.querySelectorAll('.item');
const firstSection = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section');
const thirdSection = document.querySelector('.third-section');

navLinks.forEach((link, index) => {
  if(index === 0) {
    link.addEventListener('click', () => {
      link.classList.add('link-color');
      navLinks[1].classList.remove('link-color');
      navLinks[2].classList.remove('link-color');
      firstSection.classList.remove('hide-section');
      secondSection.classList.add('hide-section');
      thirdSection.classList.add('hide-section');
    })
  } else if (index === 1) {
    link.addEventListener('click', () => {
      link.classList.add('link-color');
      navLinks[0].classList.remove('link-color');
      navLinks[2].classList.remove('link-color');
      firstSection.classList.add('hide-section');
      secondSection.classList.remove('hide-section');
      thirdSection.classList.add('hide-section');
    })
  } else {
    link.addEventListener('click', () => {
      link.classList.add('link-color');
      navLinks[0].classList.remove('link-color');
      navLinks[1].classList.remove('link-color');
      firstSection.classList.add('hide-section');
      secondSection.classList.add('hide-section');
      thirdSection.classList.remove('hide-section');
    })
  }
})