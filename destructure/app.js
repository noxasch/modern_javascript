// Destructuring assignment
let a, b;

[a, b] = [100, 200];
// Array Rest pattern
// assign the rest of the value to an array specified
// in this case we named the array "rest"
[a, b, ...rest] = [100, 200, 300, 400, 500];

// using object
({a,b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// Object Rest pattern
// assign the rest of the value to an object specified
// in this case we named the object "rest"
({a,b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a);
console.log(b);
console.log(rest);

// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;

// Parse Array returned from function using destructuring
function getPeople() {
  return ['John', 'Beth', 'Mike']
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Previous way
// const name = person.name;
// const age = person.age;
// const city = person.city;
// const gender = person.gender;

// ES6 destructuring
const { name, age, city, ...other } = person;
console.log(name);
console.log(other);

greeting(person);
// greeting(); // will give an error

// map an object to a function 
// the function and will actually take the whole object and map the property accordingly and will use deault value if not specified
function greeting({ name = 'Brad' }) {
  console.log(name);
  console.log(age);
}

