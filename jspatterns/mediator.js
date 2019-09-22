// behavioral pattern like observer pattern
// an interface to communicate with colleague,
// which is a mediated object
// usage example: chatroom

// user constructor - this is the colleague
const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },

  receive: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// chatroom constructor - this is the mediator
const Chatroom = function() {
  let users = {}; // list of user

  return {
    register: function(user){
      users[user.name] = user;
      user.chatroom = this; // set to the current chatroom
    },

    send: function(message, from, to) {
      if(to){
        // single user
        to.receive(message, from);
      } else {
        // broadcast message
        for(key in users){
          if(users[key] !== from) {
            users[key].receive(message, from)
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('Hello Jeff', jeff);
sarah.send('Hello Brad', brad);
jeff.send('Hello everyone!!');