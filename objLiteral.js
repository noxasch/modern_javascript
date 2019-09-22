const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let val;

val = person;

// get specific property of an object
val = person.firstName; // recommended usage
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['state'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 24}
]

for (let i = 0; i < people.length; i++){
  console.log(people[i].name)
}


