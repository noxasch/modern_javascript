// refer to git tree for all steps

// init VAR
var greeting; // can be initialized without default value
console.log(greeting); // by default variable value is undefined
greeting = 'Hello';
console.log(greeting);

// if greeting {
//   console.log("")
// }

// variable name can start with letters, number, _ and $
// cannot start with a number
// _ usually used for private variable
// $ usually used with jQuery
// usually we gonna use camelCase naming convention for multiwords name variable
// var FirstName = 'Tom'; // Pascal Case

// LET
let name = 'James Smith';
console.log(name);

// CONST
// variable value cannot be change 
// cannot be re assigned to another form
// const object's properties value can be change
// const array, default value cannot be change, but can be push and etc
// just cannot use assign after it have been assigned ( = )
// use const when a value should not be reassigned
const person = {
  name: "John",
  age: 12
}

console.log(person);
person.name = 'Smith';
console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.push('six');
console.log(numbers);

