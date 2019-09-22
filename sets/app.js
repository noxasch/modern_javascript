// SETS
// - store of unique value of any types

// instantiate a Set()
const setOne = new Set();

// add values to set 
setOne.add(100);
setOne.add('A String');
setOne.add(100);
setOne.add({name: 'John'});
setOne.add(true);

// Sets will not add values that is already in the set
console.log(setOne);

const setTwo = new Set([1, true, 'String']);

// get count or length
console.log(setOne.size);

// check for values
// return true or false
console.log(setOne.has(100)); 
console.log(setOne.has(50 + 50));
console.log(setOne.has({name: 'John'})); // return false

let objectOne = {name: 'James'};
setOne.add(objectOne);

console.log(setOne.has(objectOne)); 
// return true because we actually compare the address refered to the variable
// because object are called by reference

// Remove or delete from set
setOne.delete(100);
console.log(setOne);

// Iterate the set using for of
for(let item of setOne) {
  console.log(item);
}

// iterate using forEach 
setOne.forEach((val) => {
  console.log(val);
});

// convert set into array
const setArr = Array.from(setOne);
console.log(setArr);


