// kind of like module pattern
// a singleton object is an immediate anonymous object
// that can only return one instance if an object at a time
// only one instance will ever be created no matter how many times
// it is being called
// not really have much use
// STUPID

const Singleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object('Object instance');
    return object;
  }


  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);