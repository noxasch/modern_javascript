// Log to console
console.log('Hello World'); // log string
console.log(123); // log number
console.log(true); // log boolean

var varOne = 'Hello'; // variable
console.log(varOne); // log variable
console.log([1, 2,3,4]); // log array
console.log({a:1, b:2}); // log object (this is a literal object)
console.table({a:1, b:2}); // log output in a table

// mainly we use single quotes to quote string in javascript
// this is because when involving html we gonna to use double quotes inside the string
// most of the time

console.info('This is an info'); // log info
console.error('This is some error'); // log an error
console.warn('This is a warning'); // log a waring
// console.clear(); // clear console tab

console.time('Hello'); // this will start count and output the time taken to raech console.timeEnd()
console.timeEnd('Hello');

// single line comments

/*
  multi 
  line 
  comments
*/

/**
 * This for function or class
 * description for code documentation
 * good practice for large code
 */
