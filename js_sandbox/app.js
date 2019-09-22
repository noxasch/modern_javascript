// localStorage

// set local storage item
// localStorage.setItem('name', 'John');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');


// clear localStorage
// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit', 
  function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      // because even if it json, it is stored as a string
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    // change back from array to string
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');
    console.log(task);
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

// for (let key in tasks){
//   console.log(`${key} : ${tasks[key]}`);
// }

tasks.forEach(element => {
  console.log(element);
});

