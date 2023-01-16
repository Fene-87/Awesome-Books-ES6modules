import Store from "./store.js";

export default class UI {
    static displayBooks = () => {
        const books = Store.getBooks();
    
        books.forEach((book) => UI.addBookToList(book));
      }
    
      static addBookToList = (book) => {
        const list = document.querySelector('.displayed-books');
        const row = document.createElement('div');
        row.classList.add('display-row')
    
        row.innerHTML = `
            <div class="all-books">
              <p>${book.title}</p>
              <p>&nbsp;by ${book.author}</p>
            </div>
            <button type="button" class="delete">remove</button>
        `;
    
        list.appendChild(row);
        const allChildren = document.querySelectorAll('.display-row')
        allChildren.forEach((element, index) => {
          if(index % 2 === 0) {
            element.classList.add('background-color-one')
          } else {
            element.classList.add('background-color-two')
          }
        })
      }
    
      static deleteBook = (el) => {
        if (el.classList.contains('delete')) {
          el.parentElement.remove();
        }
      }
    
      static clearFields = () => {
        document.querySelector('#book-name').value = '';
        document.querySelector('#book-author').value = '';
      }
}