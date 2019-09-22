// Modules Pattern
// Basic Structure

(function(){
  // declare private vars and functions

  return {
    // declare public vars and functions
  }
})();


// Standard module pattern
const UIcontroller = (function(){
  // within here are private vars and function
  let text = 'Hello World';

  const changeText = function() {
    const h1 = document.querySelector('h1');
    h1.textContent = text;
  }

  return {
    // outside have no access to private function
    // this is the public function
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UIcontroller.callChangeText();
console.log(typeof UIcontroller);



// Revealing module pattern
const itemController = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added....');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    // we exposing the private function here
    add: add,
    get: get
  }
})();

itemController.add({id: 1, name: 'John'});
console.log(itemController.get(1));