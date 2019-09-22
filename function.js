// FUNCTION DECLARATION

function greet() {
  // console.log('Hello');
  return 'Hello';
}

// by default function parameters value are undefined
function greet(firstName, lastName) {
  // before ES6
  if(typeof firstName === 'undefined') {firstName = 'John'}
  if(typeof lastName === 'undefined') {lastName = 'Doe'}

  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// ES6 allow default value for the parameter
function greet(firstName = 'John', lastName = 'Doe') {

  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('John'));

// FUNCTION EXPRESSION or ANONYMOUS FUNCTION
const square = function(x) {
  return x*x;
};

// can be name but usually we won't
// const square = function square(x) {
//   return x*x;
// };

// console.log(square(2))

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(){
  console.log('IIFE Ran...');
})();

(function(name){
  console.log('Hello ' + name);
})('John');

// PROPERTY METHOD
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();