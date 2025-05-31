// 💥 Defining class
class Person {
  name: string;
  age: number;

  constructor(naam: string, umar: number) {
    this.name = naam;
    this.age = umar;
  }

  greet(): string {
    return `Hello , my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// 💥 Creating object / instance
const person1 = new Person("Harsh", 32);

console.log(person1.greet()); // 🔸 op: Hello , my name is Harsh and I am 32 years old.
