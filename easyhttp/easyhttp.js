/* jshint esversion:6 */

// we are using protoype and ajax (ES5)

// easyHttp Constructor
function easyHttp() {
  this.http = new XMLHttpRequest();
}

// GET request
// we put a callback so that it run asyncronously
easyHttp.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.send();

  let self = this;
  // this is a callback function
  this.http.onload = function(){
    // this is inside function scope
    // this will refer to function scope instead of object scope
    // weird and this is why using ES6 class is better
    if(self.http.status === 200){
      // console.log(self.http.responseText);
      // send error and response if any
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
};

// POST requests using Ajax + callback
easyHttp.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  // we are require to setRequestHeader for a post request
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.send(JSON.stringify(data));
  
  let self = this;
  this.http.onload = function(){
    // we don't need to check for status on POST request
    callback(null, self.http.responseText);
  };
};

// PUT requests
easyHttp.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  // we are require to setRequestHeader for a post request
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.send(JSON.stringify(data));
  
  let self = this;
  this.http.onload = function(){
    // we don't need to check for status on POST request
    callback(null, self.http.responseText);
  };
};

easyHttp.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  this.http.send();

  let self = this;
  // this is a callback function
  this.http.onload = function(){
    if(self.http.status === 200){
      // DELETE will return empty object in the responseText
      // so we just set our own message
      callback(null, 'Post Deleted');
      // callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
};