import User, { printName, printAge  } from './user.js';

let user = new User("Mike", 37);
printAge(user);
printName(user);

// must from the same domain
// must have type="module" <script defer type="module" src="app.js"></script>
// async - do not wait for script to finish fetch - use for script that is not placed at the bottom of the doc
// defer - only execute the script when the HTML has been fully parsed
// for script that is not depending on other script, use async