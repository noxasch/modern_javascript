/* jshint esversion:6 */

// UI Elements 
const containerUI = document.querySelector('.container');
const bookFormUI = document.querySelector('#book-form');
const inputTitleUI = document.querySelector('#title');
const inputAuthorUI = document.querySelector('#author');
const inputIsbnUI = document.querySelector('#isbn');
const list = document.querySelector('#book-list');

// Book Constructor which is introduced in ES5
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {
  // just an empty constructor
}

UI.prototype.addBookToList = function(book) {
  // Create new element
  const row = document.createElement('tr');
  // insert col
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="javascript:void(0)" class="delete">X</a></td>
  `;
  
  // append new element to existing element
  list.appendChild(row);
};

UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function() {
  inputTitleUI.value = '';
  inputAuthorUI.value = '';
  inputIsbnUI.value = '';
};

UI.prototype.showAlert = function(msg, className) {
  // create div
  const div = document.createElement('div');
  // add Class
  div.className = `alert ${className}`;
  // add text node
  div.appendChild(document.createTextNode(msg));
  // insert aleart
  containerUI.insertBefore(div, bookFormUI);
  // timeout after 3 sec
  setTimeout(function(){
    // remove alert element
    document.querySelector('.alert').remove();
  }, 3000);
};

// Add Book Event listener
bookFormUI.addEventListener('submit', function(e){
  e.preventDefault(); // placement of this does not matter according to mozilla
  let title = inputTitleUI.value;
  let author = inputAuthorUI.value;
  let isbn = inputIsbnUI.value;

  // instantiate UI Object
  const ui = new UI();

  // validate input
  if(title === '' || author === '' || isbn === ''){
    // show alert
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
    // instantiate the book object
    const book = new Book(title, author, isbn);
    
    // Add book to List;
    ui.addBookToList(book);

    // show success message
    ui.showAlert('Book Added!', 'success');

    // clear input fields
    ui.clearFields();

    // console.log(book);
  }


});

// Delete Book Event Listener
list.addEventListener('click', function(e){
  e.preventDefault();
  // instantiate UI Object
  const ui = new UI();
  // now target the delete button
  ui.deleteBook(e.target);
  // show alert
  ui.showAlert('Book Removed!', 'success');
});