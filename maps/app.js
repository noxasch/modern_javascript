// Maps
// - an object that holds key-value pair
// - object can be used as a key compare to object literal
// - Can use any type as a key or value

const map = new Map();

// set key
const key1 = 'some string',
  key2 = {},
  key3 = function(){};

// Set map values by key
map.set(key1, 'value of key1');
map.set(key2, 'value of key2');
map.set(key3, 'value of key3');

// Get values
console.log(map.get(key1), map.get(key2), map.get(key3));
console.log(map.size); // size or length of the map

// Iterate over a Map using for ... of
for(let [key,value] of map) {
  console.log(value)
}

// Iterate keys only
for(let key of map.keys()) {
  console.log(key)
}

// iterate value only
for(let value of map.values()) {
  console.log(value)
}

// Iterate using forEach
map.forEach((value, key) =>{
  console.log(`${key} = ${value}`);
});

// convert maps to arrays
// Create an array of the key value pairs
const keyValArr = Array.from(map);
console.log(keyValArr);

// Create an array of values
const valArr = Array.from(map.values());
console.log(valArr);

// Create an array of keys
const keyArr = Array.from(map.keys());
console.log(keyArr);