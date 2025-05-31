/*
💥 An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.
*/

abstract class Shape {
  abstract getArea(): number; // abstract methods must be implemented in sub classes

  printArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(private length: number, private breadth: number) {
    super();
  }

  getArea(): number {
    return this.length * this.breadth;
  }
}

const rect1 = new Rectangle(10, 10);

rect1.printArea(); // The area is 100

