let  val;

// Number to String
val = 5;

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // which output undefined because number does not have length
console.log((10).toFixed(2));

// Now we convert it
val = String(val);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // which output undefined because number does not have length

val = Math.random() * 10;
console.log('random: ' + val);
val = Math.round(val);
console.log('random: ' + val);

