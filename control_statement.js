
// const id = '100';


// // ternary operator form
// id == 100 ? console.log('Correct') : console.log('incorrect');


// // simpler ternary operator
// console.log(id == 100 ? 'correct' : 'incorrect');

// // normal if else
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }

// // check for both value and type
// // gonna use this most of the time
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }

// // else if
// if(CONDITION_A){
//   // statement
// } else if (CONDITION_B) {
//   // statement
// } else {
//   // statement
// }

// // check if variable is exist without giving out an error
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

const color = 'red';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is red');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday'
    break;
  case 1:
    day = 'Monday'
    break;
}

console.log(`Today is ${day}`)