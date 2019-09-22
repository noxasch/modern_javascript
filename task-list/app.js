// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTask);
  // filter task event
  filter.addEventListener('keyup', filterTasks);

}

// Load task from localStorage
function getTasks(){
  let tasks = getTasksfromLocalStorage();

  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.href = 'javascript:void(0)'
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="material-icons">close</i>'
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  } else {
    
    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    link.href = 'javascript:void(0)'
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="material-icons">close</i>'

    // append link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    // Store in localStorage
    storeTaskInLocalStorage(taskInput.value);
    
    // clear back input
    taskInput.value = '';
  }

  e.preventDefault();
}

// Remove Task
function removeTask(e){
  // console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

      // remove from localStorage as well
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from localStorage
function removeTaskFromLocalStorage(taskItem){
  // console.log(taskItem.innerText);
  // console.log(taskItem.firstChild.textContent);
  let tasks = getTasksfromLocalStorage();
  tasks.forEach(function(task, index){
    if(taskItem.firstChild.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// clear all task
function clearTask(e){
  if(confirm('Are you sure?')){
    // slow
    // taskList.innerHTML = ''; // clear all li

    // faster
    // while there is still an element inside, remove it
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }

    // // same
    // for (let c = taskList.firstChild; c !== null; c = taskList.firstChild) {
    //   taskList.removeChild(c);
    // }
    // https://jsperf.com/innerhtml-vs-removechild/420

    clearTasksFromLocalStorage();
  }
}

// clear all task from local storage
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks = getTasksfromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// filter task
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  console.log(text)
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    // it will return -1 if no match
    // thus ! negate and will equal what match
    // show the li if content match search
    // hide it if its not
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

}

// refactoring attempt
function getTasksfromLocalStorage(){
  let tasks;
  if(localStorage.getItem('tasks') == null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}
