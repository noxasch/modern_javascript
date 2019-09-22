
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// Loop through array using for
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// uisng forEach
cars.forEach(function(car){
  console.log(car);
});

// using forEach and arrow function
cars.forEach((car)=>{
  console.log(car);
});

// array item, array index, and the whole array
cars.forEach((car, index, array)=>{
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Using MAP
const users = [
  {id:1, name:'John'},
  {id:2, name:'Sarah'},
  {id:3, name:'Karen'}
];

const ids = users.map((user)=>{
  return user.id;
});

// console.log(ids);

// For in Array
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 40
}

for(let key in user){
  console.log(`${key} : ${user[key]}`);
}

