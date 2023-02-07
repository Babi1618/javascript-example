//class

class Person {
    constructor(fistName, lastname) {
      this.name = fistName;
      this.lastname = lastname;
    }
  
    getFullName() {
      // console.log(this.name + " " + this.lastname);
      return this.name + " " + this.lastname;
    }
  }
  
  const joe = new Person("Joe", "Doe");
  class Student extends Person {
    constructor(name, lastname, age) {
      super(name, lastname);
      this.age = age;
    }
    sayHello() {
      super.getFullName(); 
      return `Hi! My name is ${this.getFullName()} and I'm ${
        this.age
      } years old.`;
    }
  }
  
  const gino = new Student("Gino", "Bianchi", 30);
  console.log(gino.sayHello());
  
  
//prototype

function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person2.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
  
  let john = new Person2('John', 'Doe');
  let fullName = john.getFullName();
  console.log(fullName)