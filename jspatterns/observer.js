/*
 A subsciption model
 - allow to subscribe and unsubscribe to certain events or functionality
 - can be used to notify the DOM that some of the element need to be updated
 - AngularJs rely on this pattern through event management
*/

// Observer constructor
function EventObserver() {
  this.observer = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observer.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function(fn) {
    // return empty array if function exist
    // equally remove function from the array
    this.observer = this.observer.filter((item) => {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },

  fire: function() {
    this.observer.forEach(function(item) {
      item.call();
    });
  }
}

// instantiate the observer
const click = new EventObserver();

// event listener
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});


// click handler function
const getCurrentMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function() {
  console.log(`Current milliseconds: ${new Date().getSeconds()}`);
}