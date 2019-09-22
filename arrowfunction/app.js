/* jshint esversion:6 */

// anonymous function
// const sayHello = function() {
//   console.log('Hello');
// };

// arrow function (ES6)
// const sayHello = () => {
//   console.log('Hello');
// };

const sayHello = () => console.log('Hello');

// arrow function that return a string
const sayHello = () => 'Hello'; 

// anonymous function that return a string
const sayHello = function() {
  return 'Hello';
};

// by default arrow function refere to object scope
// .this or property will always refer to object scope if there is any (default object is DOM)
// So to return an object literal, it must be wrap within a a bracket (if not it will try search the object property

const sayHello = () => { msg: 'Hello'} // will not work, return undefined
const sayHello = () => ({ msg: 'Hello'}); // work
// can accept parameters
// single params does not require paranthesis
const sayHello = (name) => console.log(`Hello ${name}`); 
const sayHello = name => console.log(`Hello ${name}`); // will still work
// multiple params must be in a parathesis
const sayHello = (firstName , lastName) => console.log(`Hello ${firstName} ${lastName}`); 



sayHello();
console.log(sayHello());

const users = ['Nathan', 'John', 'william'];

// short
let nameLength = users.map(name => {
  return name.length;
});

// shortest
nameLength = users.map(name => name.length);