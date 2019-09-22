let val;

const today = new Date();
// ways of setting up date
// const birthday = new Date('9-18-1981');
let birthday = new Date('9-18-1981 11:25:00');
birthday = new Date('September 18 1993');
birthday = new Date('9/18/1993');
// javascript date object

val = today; // date object
val = today.toString(); // as string
val = birthday;
val = today.getMonth();
// month start from 0 = january 1
// 11 = december 12
val = today.getDate();
val = today.getDay();
// day also start from 0 - Sunday
val = today.getHours();
val = today.getMinutes();
val = today.getTime(); // time in milliseconds timestamp which count from january 1st 1970

birthday.setMonth(2); // 0 - jan, 1 - feb, 2 - mac
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(birthday);