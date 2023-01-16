export default class Store {
    static getBooks = () => {
        let books;
        if (localStorage.getItem('booklist') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('booklist'));
        }
    
        return books;
      }
    
      static addBook = (book) => {
        const books = Store.getBooks();
        books.push(book);
    
        localStorage.setItem('booklist', JSON.stringify(books));
      }
    
      static deleteBook = (title) => {
        const books = Store.getBooks();
        books.forEach((book, index) => {
          if (book.title === title) {
            books.splice(index, 1);
          }
        });
    
        localStorage.setItem('booklist', JSON.stringify(books));
      }
}