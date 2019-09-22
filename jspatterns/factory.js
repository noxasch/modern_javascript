// create interface to create object
// but let subclasses define which classes to instantiate
// - used to manage, maintain and manipulate collection
// of object that are different but have common characteristic

function MemberFactory() {
  this.createMember = function(name, type){
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}


const SimpleMembership = function name(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function name(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function name(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Winchester','simple'));
members.push(factory.createMember('Dean Winchester','super'));
console.log(members);

members.forEach( member => {
  member.define();
});
