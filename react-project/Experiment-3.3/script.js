// Base Class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call parent constructor
    this.course = course;
  }

  // Override method
  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Override method
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

// Creating instances
const student1 = new Student("Kira", 19, "Computer Science");
const teacher1 = new Teacher("Dr. Sharma", 45, "Artificial Intelligence");

// Demonstrating method calls
console.log(student1.displayInfo());
console.log(teacher1.displayInfo());

