/* jshint esversion:6 */

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

/* OOP Concept
  - Inherit everything from the parent (we don't have access modifier here)
  - child share the same static method as parent
  - static method are masked if child have static method
  that has the same name as in the parent
*/

// subclass or child
class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName); // call the parent or superclass constructor
    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Doe', '555-555-555', 'Standard');

console.log(john);
console.log(john.greeting());




