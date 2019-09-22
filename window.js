// WINDOW METHODS, OBJECT, & PROPERTIES

// window is not rquired as it is alread global
// console is actually part of window object
// window.console.log('Hello');
// console.log('Hello');

// alert is also part of window object
window.alert('Hello World');
alert('Hello World');

// prompt is like alert except it accept input
let input = window.prompt();
input = prompt();
alert(input);

// confirm
if(confirm('Are you sure')){
  console.log('Yes');
} else {
  console.log('No');
}

// though alert(), prompt() and confirm() does not really give the best user experience
// for modern web application

let val;
// Outer height and width
val = window.outerHeight;
val = window.outerWidth;
// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.screenY; // vertical scroll
val = window.screenX; // vertical scroll

// Location Object
// what property we can ge here is
// in chrome console > window.location
// and it will list out
// property: host, origin, pathname, href, port, protocol, search
// search - get query string
// method: assign(), reload(), replace
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search;

// Redirect
// window.location.href = "https://www.google.com";

// Reload
// window.location.reload(); // this will reload all the time if put in global scope like this

// History Object
// get browsing history
// window.history.go(-1); // go will redirect to previous site by one, -2 by two step
val = window.history.length; // history of this window

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);