/* jshint esversion:6 */

// UI Elements 
const containerUI = document.querySelector('.container');
const bookFormUI = document.querySelector('#book-form');
const inputTitleUI = document.querySelector('#title');
const inputAuthorUI = document.querySelector('#author');
const inputIsbnUI = document.querySelector('#isbn');
const list = document.querySelector('#book-list');

class Book {

  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // by default a class already have an empty constructor
  // so we don't have to create it
  addBookToList(book){
    const row = document.createElement('tr');
    row.innerHTML = 
    `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="javascript:void(0)" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  deleteBook(target) {
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    inputTitleUI.value = '';
    inputAuthorUI.value = '';
    inputIsbnUI.value = '';
  }

  showAlert(msg, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    // insert before book-form
    containerUI.insertBefore(div, bookFormUI);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);

  }
}

// localStorage helper class
class Storage {
  // we create static method so that we can use without instantiate the object
  static getBooks() {
    let books;
    if(localStorage.getItem('books') == null){
      books = [];
    } else {
      // parse it as a JSON object as localStorage store it as a string
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => {
        const ui = new UI();
        ui.addBookToList(book);
    });

  }

  static addBook(book){
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    let books = Storage.getBooks();
    books.forEach((book, index) => {
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    // store back the altered books list into localstorage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Storage.displayBooks());

bookFormUI.addEventListener('submit', function(e){
  e.preventDefault();
  let title = inputTitleUI.value;
  let author = inputAuthorUI.value;
  let isbn = inputIsbnUI.value;

  const ui = new UI();
  if(title.trim() === '' || author.trim() === '' || isbn.trim() === ''){
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    const book = new Book(title, author, isbn);
    ui.addBookToList(book);
    Storage.addBook(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }
});

list.addEventListener('click', function(e){
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
  Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert('Book Removed!', 'success');
});